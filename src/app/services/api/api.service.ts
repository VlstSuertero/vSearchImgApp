import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Image } from '../../store/models';
import { EMPTY, of } from 'rxjs';
import { fetchBookmarkFailure } from '../../store';

enum flickr {
  key = '5a0dc28028017c1990fb0144d9a20b1b',
  secret = 'b162eb4a7e3f12ac',
}

export interface FlickrResponse {
  photos: {
    photo: Image[];
  };
}

export interface FlickrImageResponse {
  photo: {
    id: string,
    tags: {
      tag: { raw: string }[]
    },
    owner: {
      username: string,
      realname: string,
    },
    dates: {
      taken: string,
    },
    title: { _content: string };
    urls: {
      url: { _content: string }[]
    }
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http: HttpClient) {}

  public fetchFromFlickr(query: string) {
    return this.http
      .get<FlickrResponse>('https://www.flickr.com/services/rest/', {
        params: {
          tags: query,
          method: 'flickr.photos.search',
          format: 'json',
          nojsoncallback: '1',
          tag_mode: 'all',
          media: 'photos',
          per_page: '15',
          extras: 'tags,date_taken,owner_name,url_q,url_m',
          api_key: flickr.key,
        },
      })
      .pipe(
        map((response) => response.photos.photo),
      );
  }


  public fetchImageFromFlickr(id: string) {
    return this.http
      .get<FlickrImageResponse>('https://www.flickr.com/services/rest/', {
        params: {
          method: 'flickr.photos.getInfo',
          photo_id: id,
          api_key: flickr.key,
          format: 'json',
          nojsoncallback: 1,
        },
      })
      .pipe(
        map(({photo}) => ({
          id: photo.id,
          title: photo.title._content,
          tags: photo.tags.tag.map(tag => tag.raw).join(', '),
          owner: photo.owner.username,
          ownername: photo.owner.realname,
          datetaken: photo.dates.taken,
          url_q: photo.urls.url[0]?._content,
          url_m: photo.urls.url[0]?._content,
        } as Image)),
      );
  }
}

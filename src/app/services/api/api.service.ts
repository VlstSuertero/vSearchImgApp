import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Image } from '../../store/models';

enum flickr {
  key = '5a0dc28028017c1990fb0144d9a20b1b',
  secret = 'b162eb4a7e3f12ac',
}

export interface FlickrResponse {
  photos: {
    photo: Image[];
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
}

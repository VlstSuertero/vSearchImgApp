import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, of } from 'rxjs';
import { catchError, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';

import { ApiService } from '../../../services/api';

import { fetch, fetchBookmark, fetchBookmarkFailure, fetchBookmarkSuccess, fetchSuccess } from './actions';
import { Store } from '@ngrx/store';
import { getBookmarks } from './selectors';
import { Image } from '../../models';
import { BookmarkStorageService } from '../../../services/storage';

@Injectable()
export class ImageFinderEffects {

  public fetchImages$ = createEffect(() => this.actions$.pipe(
      ofType(fetch),
      mergeMap((elem: any) => this.api.fetchFromFlickr(elem.query).pipe(
        map(items => ({items})),
        map(fetchSuccess),
        catchError(() => EMPTY)
      ))
    )
  );

  public fetchBookmark$ = createEffect(() => this.actions$.pipe(
      ofType(fetchBookmark),
      mergeMap(({id}) => this.api.fetchImageFromFlickr(id).pipe(
        map(item => ({item})),
        map(fetchBookmarkSuccess),
        catchError(error => of(fetchBookmarkFailure({error}))),
      ))
    )
  );

  public fetchBookmarks$ = createEffect(
    () => this.storage.bookmarks$().pipe(
      withLatestFrom(this.store$.select(getBookmarks)),
      map(
        ([ids, bookmarks]) => ids.filter(
          id => !bookmarks.some((bookmark: Image) => bookmark.id === id)
        )
      ),
      mergeMap(ids => from(ids).pipe(
        map(id => ({id})),
        map(fetchBookmark),
      )),
    )
  );

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private storage: BookmarkStorageService,
    private store$: Store,
  ) {
  }

}

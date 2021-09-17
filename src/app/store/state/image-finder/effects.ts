import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ApiService } from '../../../services/api';

import { fetch, fetchSuccess } from './actions';

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

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) {
  }

}

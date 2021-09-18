import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { fetch } from './actions';

@Injectable({
  providedIn: 'root'
})
export class Dispatcher {

  constructor(private store$: Store) {
  }

  fetch(query?: string) {
    this.store$.dispatch(fetch({query}))
  }
}

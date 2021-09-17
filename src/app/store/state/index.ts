import { ActionReducerMap } from '@ngrx/store';

import * as imageFinder from './image-finder';

export * from './image-finder'

export interface State {
  [key: string]: any,
}

export const reducers: ActionReducerMap<State> = {
  [imageFinder.reducerFeatureKey]: imageFinder.reducer,
};

export const effects = [
  imageFinder.ImageFinderEffects,
];

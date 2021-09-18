import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { reducerFeatureKey } from './reducer';

export const imageFinderSelectors = createFeatureSelector<Store>(reducerFeatureKey);

export const getPhotos = createSelector(
  imageFinderSelectors,
  (elem: any): any => {
    return elem.image.items
  }
)

export const getBookmarks = createSelector(
  imageFinderSelectors,
  (elem: any): any => {
    return elem.bookmark?.items
  }
)

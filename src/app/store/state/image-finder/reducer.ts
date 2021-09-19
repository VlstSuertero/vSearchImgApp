import { createReducer, on } from '@ngrx/store';

import { Image } from '../../models';
import * as actions from './actions';

export const reducerFeatureKey = 'imageFinder'

export interface ImageFinderState {
  image: {
    items: Image[],
    order: string[],
    error?: Error,
    isLoading: boolean,
  },
  bookmark: {
    items: Image[],
    error?: Error,
  },
}

export const initialState: ImageFinderState = {
  image: {
    items: [],
    order: [],
    isLoading: false,
  },
  bookmark: {
    items: [],
  }
};

export const reducer = createReducer(
  initialState,
  on(actions.fetch, state => ({
    ...state,
    image: {
      ...state.image,
      isLoading: true,
    }
  })),
  on(actions.fetchSuccess, (state, {items}) => ({
    ...state,
    image: {
      ...state.image,
      items: items,
      order: items.map(item => item.id),
      isLoading: false,
    }
  })),
  on(actions.fetchFailure, (state, {error}) => ({
    ...state,
    image: {
      ...state.image,
      error: error,
      isLoading: false,
    }
  })),
  on(actions.fetchBookmark, state => ({
    ...state,
    bookmark: {
      ...state.bookmark,
    }
  })),
  on(actions.fetchBookmarkSuccess, (state, {item}) => ({
    ...state,
    bookmark: {
      items: [...state.bookmark.items, item],
    }
  })),
  on(actions.fetchBookmarkFailure, (state, {error}) => ({
    ...state,
    bookmark: {
      ...state.bookmark,
      error: error,
    }
  })),
  on(actions.addBookmark, (state, {item}) => ({
    ...state,
    bookmark: {
      ...state.bookmark,
      items: [...state.bookmark.items, item],
      isLoading: false,
    }
  })),
  on(actions.removeBookmark, (state, {id: removeId}) => ({
    ...state,
    bookmark: {
      ...state.image,
      items: state.bookmark.items.filter(item => item.id !== removeId),
      isLoading: false,
    }
  })),
);


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
    ids: string[],
    error?: Error,
    isLoading: boolean,
  },
}

export const initialState: ImageFinderState = {
  image: {
    items: [],
    order: [],
    isLoading: false,
  },
  bookmark: {
    ids: [],
    isLoading: false,
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
      isLoading: true,
    }
  })),
  on(actions.fetchBookmarkSuccess, (state, {ids}) => ({
    ...state,
    bookmark: {
      ids: ids,
      isLoading: false,
    }
  })),
  on(actions.fetchBookmarkFailure, (state, {error}) => ({
    ...state,
    bookmark: {
      ...state.bookmark,
      error: error,
      isLoading: false,
    }
  })),
  // on(actions.addBookmark, (state, {id}) => ({
  //   ...state,
  //   bookmark: {
  //     ...state.bookmark,
  //     ids: [...state.bookmark.ids, id],
  //     isLoading: false,
  //   }
  // })),
  // on(actions.removeBookmark, (state, {id: removeId}) => ({
  //   ...state,
  //   bookmark: {
  //     ...state.image,
  //     ids: state.bookmark.ids.filter(id => id !== removeId),
  //     isLoading: false,
  //   }
  // })),
);


import { createAction, props } from '@ngrx/store';
import { Image } from '../../models';

export const fetch = createAction('[Image Finder] Fetch', props<{ query?: string }>());
export const fetchSuccess = createAction('[Image Finder] Fetch Success', props<{ items: Image[] }>());
export const fetchFailure = createAction('[Image Finder] Fetch Failure', props<{ error: any }>());

export const fetchBookmark = createAction('[Image Finder] Fetch Bookmark');
export const fetchBookmarkSuccess = createAction('[Image Finder] Fetch Success Bookmark', props<{ ids: string[] }>());
export const fetchBookmarkFailure = createAction('[Image Finder] Fetch Failure Bookmark', props<{ error: any }>());
/*export const addBookmark = createAction('[Image Finder] Add Bookmark', props<{id: string}>());
export const removeBookmark = createAction('[Image Finder] Remove Bookmark', props<{id: string}>());*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkStorageService } from './bookmark-storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [BookmarkStorageService]
})
export class StorageModule { }

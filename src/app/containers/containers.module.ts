import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components';

import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    SearchFormComponent,
    SearchResultComponent,
    BookmarksComponent
  ],
  exports: [
    SearchFormComponent,
    SearchResultComponent,
    BookmarksComponent
  ],
  imports: [
    CommonModule,

    ComponentsModule,
  ]
})
export class ContainersModule { }

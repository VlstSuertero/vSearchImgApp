import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import {
  SearchFormComponent,
  SearchResultComponent,
  SearchResultItemComponent,
} from './search';
import {
  BookmarkListComponent,
  BookmarkListItemComponent,
} from './bookmark';
import { PaginationComponent } from './pagination/pagination.component';

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    SearchFormComponent,
    SearchResultComponent,
    SearchResultItemComponent,
    PaginationComponent,
    BookmarkListComponent,
    BookmarkListItemComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchFormComponent,
    SearchResultComponent,
    BookmarkListComponent,
    BookmarkListItemComponent,
  ],
})
export class ComponentsModule {
}

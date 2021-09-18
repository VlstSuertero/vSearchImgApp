import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';

import {
  SearchFormComponent,
  SearchResultComponent,
  SearchResultItemComponent,
} from './search';
import {
  BookmarkListComponent,
  BookmarkListItemComponent,
} from './bookmark';

import { PaginatorPipe } from '../pipes/paginator.pipe';

@NgModule({
  declarations: [
    SearchFormComponent,
    SearchResultComponent,
    SearchResultItemComponent,
    BookmarkListComponent,
    BookmarkListItemComponent,

    PaginatorPipe,
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
        ReactiveFormsModule,
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

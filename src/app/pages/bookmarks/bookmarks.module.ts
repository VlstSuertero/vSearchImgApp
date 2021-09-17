import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksComponent } from './bookmarks.component';
import { ComponentsModule } from '../../components';
import { ContainersModule } from '../../containers';

@NgModule({
  declarations: [
    BookmarksComponent
  ],
    imports: [
        CommonModule,
        ComponentsModule,
        ContainersModule
    ],
  exports: [
    BookmarksComponent,
  ]
})
export class BookmarksModule { }

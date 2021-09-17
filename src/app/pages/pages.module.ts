import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchModule } from './search/search.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    SearchModule,
    BookmarksModule,
    LoginModule,
  ]
})
export class PagesModule { }

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Image } from '../../store/models';
import { getBookmarks } from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bookmarks-container',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks$?: Observable<Image[]>;

  constructor(private store$: Store) {
  }

  ngOnInit(): void {
    this.bookmarks$ = this.store$.pipe(select(getBookmarks))
  }
}

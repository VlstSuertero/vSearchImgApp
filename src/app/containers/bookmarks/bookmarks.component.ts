import { Component, OnInit } from '@angular/core';
import { BookmarkStorageService } from '../../services/storage';
import { select, Store } from '@ngrx/store';
import { Image } from '../../store/models';
import { getPhotos } from '../../store';

@Component({
  selector: 'app-bookmarks-container',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  private images: Image[] = []
  private bookmarks: string[] = []

  constructor(
    private storage: BookmarkStorageService,
    private store$: Store,
  ) {
  }

  get list(): Image[] {
    return this.images.filter(image => this.bookmarks.includes(image.id))
  }

  ngOnInit(): void {
    this.storage.bookmarks$().subscribe(bookmarks => this.bookmarks = bookmarks)
    this.store$.pipe(select(getPhotos)).subscribe(images => this.images = images)
  }

}

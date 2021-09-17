import { Component, Input, OnInit } from '@angular/core';
import { BookmarkStorageService } from '../../../../services/storage';
import { Image } from '../../../../store/models';

@Component({
  selector: 'app-bookmark-list-item',
  templateUrl: './bookmark-list-item.component.html',
  styleUrls: ['./bookmark-list-item.component.scss']
})
export class BookmarkListItemComponent implements OnInit {

  @Input() bookmark?: Image

  constructor(
    private storage: BookmarkStorageService
  ) { }

  ngOnInit(): void {

  }

  removeBookmark(id: string) {
    this.storage.remove(id)
  }
}

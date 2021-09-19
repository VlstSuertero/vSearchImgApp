import { Component, Input, OnInit } from '@angular/core';

import { BookmarkStorageService } from '../../../../services/storage';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  @Input() item: any
  public compare?: any

  constructor(
     private storage: BookmarkStorageService,
  ) { }

  ngOnInit(): void {

    this.storage.bookmarks$().subscribe(value => {
      this.compare = value.some(elem => elem === this.item.id)
      }
    )

  }

  addBookmark(id: string) {

    this.storage.add(id)
  }
}

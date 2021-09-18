import { Component, Input, OnInit } from '@angular/core';

import { BookmarkStorageService } from '../../../../services/storage';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  @Input() item: any

  constructor(
     private storage: BookmarkStorageService,
  ) { }

  ngOnInit(): void {

  }

  addBookmark(id: string) {

    this.storage.add(id)
  }
}

import { Component, Input, OnInit } from '@angular/core';

import { Image } from '../../../store/models';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {

  @Input() bookmarks: Image[] = []

  constructor() {
  }

  ngOnInit(): void {
  }
}

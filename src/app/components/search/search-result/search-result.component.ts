import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnChanges {

  @Input() results: any
  pageEvent?: PageEvent;

  constructor() { }

  ngOnInit(): void {
    this.pageEvent = {
      previousPageIndex: undefined,
      pageIndex: 0,
      pageSize: 10,
      length: this.results?.length || 0,
    }
  }

  ngOnChanges(): void {
    if (this.pageEvent) {
      this.pageEvent.length = this.results?.length || 0
    }
  }
}

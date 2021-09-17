import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() results: any

  public pageSlice: any
  public startIndex: any
  public endIndex: any

  constructor() { }

  ngOnInit(): void {
    this.pageSlice = this.results.slice(0,3)
  }
}

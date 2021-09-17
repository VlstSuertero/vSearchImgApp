import { Component, OnInit } from '@angular/core';
import { getPhotos } from '../../store';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-search-result-container',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  result$: any

  constructor(
    private store$: Store,
  ) {
  }

  ngOnInit(): void {
    this.result$ = this.store$.pipe(select(getPhotos))
  }

}

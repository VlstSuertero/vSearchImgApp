import { Component, OnInit } from '@angular/core';

import { Dispatcher } from '../../store';

@Component({
  selector: 'app-search-form-container',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor(
    private dispatcher: Dispatcher,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(query: string) {
    this.dispatcher.fetch(query)
  }
}

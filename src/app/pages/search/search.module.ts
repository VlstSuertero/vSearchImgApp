import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersModule } from '../../containers';

import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
    imports: [
        CommonModule,

        ContainersModule,
    ],
  exports: [
    SearchComponent,
  ]
})
export class SearchModule { }

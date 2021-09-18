import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersModule } from '../../containers';

import { SearchComponent } from './search.component';
import { ComponentsModule } from '../../components';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    SearchComponent
  ],
    imports: [
        CommonModule,

        ContainersModule,
        ComponentsModule,
        MatGridListModule,
    ],
  exports: [
    SearchComponent,
  ]
})
export class SearchModule { }

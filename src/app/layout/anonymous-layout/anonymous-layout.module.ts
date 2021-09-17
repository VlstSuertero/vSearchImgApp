import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components';

import { AnonymousLayoutComponent } from './anonymous-layout.component';

@NgModule({
  declarations: [AnonymousLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,

    ComponentsModule,
  ],
  exports: [AnonymousLayoutComponent]
})
export class AnonymousLayoutModule { }

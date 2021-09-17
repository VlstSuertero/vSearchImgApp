import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";

import { AnonymousLayoutModule } from './anonymous-layout';
import { AuthorizedLayoutModule } from './authorized-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    AnonymousLayoutModule,
    AuthorizedLayoutModule,
  ]
})
export class LayoutModule { }

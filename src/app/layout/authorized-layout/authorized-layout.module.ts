import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { ComponentsModule } from '../../components';

import { AuthorizedLayoutComponent } from './authorized-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AuthorizedLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,

    ComponentsModule,
    MatGridListModule,
  ],
  exports: [
    AuthorizedLayoutComponent,
  ]
})
export class AuthorizedLayoutModule { }

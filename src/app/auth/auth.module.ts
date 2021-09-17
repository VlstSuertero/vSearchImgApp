import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnonymousGuard } from './anonymous.guard';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AnonymousGuard, AuthGuard],
})
export class AuthModule { }

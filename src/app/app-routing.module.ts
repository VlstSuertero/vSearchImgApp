import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonymousGuard, AuthGuard } from './auth';
import { AnonymousLayoutComponent, AuthorizedLayoutComponent } from './layout';
import { BookmarksComponent, LoginComponent, SearchComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: AuthorizedLayoutComponent,
    children: [
      {
        path: '',
        component: SearchComponent,
      },
      {
        path: 'bookmarks',
        component: BookmarksComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AnonymousLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      }
    ],
    canActivate: [AnonymousGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

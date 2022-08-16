import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'subscription',
        loadChildren: () =>
          import('./subscription/subscription.module').then((m) => m.SubscriptionModule),
      },
      {
        path: '',
        redirectTo: 'subscription',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: PagesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

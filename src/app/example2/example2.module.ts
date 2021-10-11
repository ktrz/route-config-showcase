import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteConfigModule } from '@this-dot/route-config';
import { Example2Component } from './example2.component';
import { FirstComponent } from './first.components';
import { SecondComponent } from './second.component';

@NgModule({
  imports: [
    CommonModule,
    RouteConfigModule,
    RouterModule.forChild([
      {
        path: '',
        component: Example2Component,
        children: [
          {
            path: 'first',
            component: FirstComponent,
            data: {
              linkProp: ['first'],
            },
          },
          {
            path: 'second',
            component: SecondComponent,
            data: {
              linkProp: ['second'],
            },
          },
          {
            path: '**',
            pathMatch: 'full',
            redirectTo: 'first',
          },
        ],
      },
    ]),
  ],
  declarations: [Example2Component, FirstComponent, SecondComponent],
})
export class Example2Module {}

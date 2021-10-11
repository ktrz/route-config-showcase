import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteConfigModule } from '@this-dot/route-config';
import { Example1Component } from './example.1.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';

@NgModule({
  imports: [
    CommonModule,
    RouteConfigModule,
    RouterModule.forChild([
      {
        path: '',
        component: Example1Component,
        children: [
          {
            path: 'first',
            component: FirstComponent,
            data: {
              title: ['Example 1 - first component'],
            },
          },
          {
            path: 'second',
            component: SecondComponent,
            data: {
              title: ['Example 1 - first component'],
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
  declarations: [Example1Component, FirstComponent, SecondComponent],
})
export class Example1Module {}

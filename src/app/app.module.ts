import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouteConfigModule } from '@this-dot/route-config';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouteConfigModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: 'example1',
            loadChildren: () =>
              import('./example1/example1.module').then(
                (m) => m.Example1Module
              ),
          },
          {
            path: 'example2',
            loadChildren: () =>
              import('./example2/example2.module').then(
                (m) => m.Example2Module
              ),
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'example1',
          },
        ],
      },
    ]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

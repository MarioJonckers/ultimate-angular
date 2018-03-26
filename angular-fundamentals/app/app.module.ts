import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './passenger-dashboard/home.component';
import { NotFoundComponent } from './passenger-dashboard/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }, {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true}),
    // Custom Modules
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class AppModule {
}

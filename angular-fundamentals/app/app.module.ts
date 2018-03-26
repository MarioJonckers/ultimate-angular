import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    // Custom Modules
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {
}

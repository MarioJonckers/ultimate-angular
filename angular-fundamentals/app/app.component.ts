import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <h1>{{ title }}</h1>
      <img [src]="logo">
      <input type="text" [value]="name">
      <div>
        {{ name }}
      </div>
    </div>
  `
})
export class AppComponent {
  private title: string;
  private name: string = 'Mario';
  private logo: string = 'img/logo.png';

  constructor() {
    this.title = 'Ultimate Angular';
  }
}

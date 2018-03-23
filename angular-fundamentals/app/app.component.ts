import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{ title }}
    </div>
  `
})
export class AppComponent {
  private title: string;

  constructor() {
    this.title = 'Ultimate Angular';
  }
}

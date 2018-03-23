import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{ title + '!' }}
      <div>
        {{ numberOne + numberTwo }}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>
    </div>
  `
})
export class AppComponent {
  private title: string;
  private isHappy: boolean = false;
  private numberOne: number = 1;
  private numberTwo: number = 2;

  constructor() {
    this.title = 'Ultimate Angular';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">
        Get value
      </button>
      <input type="text" #username>
      <div>
        {{ name }}
      </div>
    </div>
  `
})
export class AppComponent {
  private name: string = 'Mario';

  private handleClick(value: string): void {
    this.name = value;
  }

}

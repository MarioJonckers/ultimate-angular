import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change name
      </button>
      <input type="text" [value]="name" (input)="handleInput($event)" (blur)="handleBlur($event)">
      <div>
        {{ name }}
      </div>
    </div>
  `
})
export class AppComponent {
  private name: string = 'Mario';

  private handleInput(event: any): void {
    this.name = event.target.value;
  }

  private handleBlur(event: any): void {
    this.name = event.target.value;
  }

  private handleClick(): void {
    this.name = 'Jonckers';
  }

}

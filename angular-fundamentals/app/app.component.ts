import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change name
      </button>
      <input type="text" [ngModel]="name" (ngModelChange)="handleChange($event)">
      <input type="text" [(ngModel)]="name">
      <div>
        {{ name }}
      </div>
    </div>
  `
})
export class AppComponent {
  private name: string = 'Mario';

  private handleChange(value: string): void {
    this.name = value;
  }

  private handleClick(): void {
    this.name = 'Jonckers';
  }

}

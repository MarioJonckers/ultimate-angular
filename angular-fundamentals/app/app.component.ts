import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullName }}
        </li>
      </ul>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [ngClass]="{ 'checked-in': passenger.checkedIn, 'checked-out': !passenger.checkedIn }"></span>
          {{ i }}: {{ passenger.fullName }}
        </li>
      </ul>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [style.backgroundColor]="passenger.checkedIn ? '#2ecc71' : '#c0392b'"></span>
          {{ i }}: {{ passenger.fullName }}
        </li>
      </ul>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [ngStyle]="{ backgroundColor: passenger.checkedIn ? '#2ecc71' : '#c0392b'}"></span>
          {{ i }}: {{ passenger.fullName }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  private passengers: Passenger[] = [{
    id: 1,
    fullName: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullName: 'Rose',
    checkedIn: false
  }, {
    id: 3,
    fullName: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullName: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullName: 'Tina',
    checkedIn: false
  }]
}

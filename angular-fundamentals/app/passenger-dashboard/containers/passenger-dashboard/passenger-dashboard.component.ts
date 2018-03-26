import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
  <div>
    <passenger-count
        [items]="passengers"></passenger-count>
    <div *ngFor="let passenger of passengers">
      {{ passenger.fullName }}
    </div>
    <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"></passenger-detail>
  </div>`
})
export class PassengerDashboardComponent implements OnInit {
  private passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit(): void {
    this.passengers = this.passengerService.getPassengers();
  }

  private handleEdit(event: Passenger): void {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }

  private handleRemove(event: Passenger): void {
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
  }
}

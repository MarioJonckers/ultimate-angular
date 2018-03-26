import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger name:
        <input type="text" name="fullName" [ngModel]="detail?.fullName">
      </div>
      
      <div>
        Passenger ID:
        <input type="number" name="id" [ngModel]="detail?.id">
      </div>
      
      <div>
        <label for="">
            <input type="checkbox" [value]="true" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckedIn($event)">
        </label>
      </div>
      
      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input type="number" name="checkedInDate" [ngModel]="detail?.checkedInDate">
      </div>
      {{ form.value | json }}
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  private detail: Passenger;

  private toggleCheckedIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkedInDate = Date.now();
    }
  }
}

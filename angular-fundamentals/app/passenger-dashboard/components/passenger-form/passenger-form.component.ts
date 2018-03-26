import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/bagage.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
      <div>
        Passenger name:
        <input type="text" required name="fullName" #fullName="ngModel" [ngModel]="detail?.fullName">
        <div *ngIf="fullName.errors?.required && fullName.dirty" class="error">
          Passenger name is required
        </div>
      </div>
      
      <div>
        Passenger ID:
        <input type="number" required name="id" #id="ngModel" [ngModel]="detail?.id">
        <div *ngIf="id.errors?.required && id.dirty" class="error">
          Passenger id is required
        </div>
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
      
      <div>
        Luggage:
        <select name="baggage" id="" [ngModel]="detail?.baggage">
          <option *ngFor="let item of baggage" [value]="item.key" [selected]="item.key === detail?.baggage">{{ item.value }}</option>
        </select>
      </div>
      
      <button type="submit" [disabled]="form.invalid">
        Update passenger
      </button>
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  private detail: Passenger;
  @Output()
  private update: EventEmitter<any> = new EventEmitter();

  private baggage: Baggage[] = [
      {
        key: 'none', value: 'No baggage'
      }, {
        key: 'hand-only', value: 'Hand baggage'
      }, {
        key: 'hold-only', value: 'Hold baggage'
      }, {
        key: 'hand-hold', value: 'Hand and hold baggage'
      }
    ];

  private toggleCheckedIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkedInDate = Date.now();
    }
  }

  private handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}

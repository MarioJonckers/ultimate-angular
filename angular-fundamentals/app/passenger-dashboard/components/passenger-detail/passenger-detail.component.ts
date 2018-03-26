import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input 
          type="text"
          [value]="detail.fullName"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      <div *ngIf="!editing">
        {{ detail.fullName }}
      </div>
      <div class="date">
        Check in date:
        {{ detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
      </div>
      <div class="children">
        Children: {{ detail.children?.length || 0 }}
      </div>
      <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
      <button (click)="onRemove()">Remove</button>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  private detail: Passenger;
  @Output()
  private edit: EventEmitter<any> = new EventEmitter();
  @Output()
  private remove: EventEmitter<any> = new EventEmitter();
  private editing: boolean = false;

  constructor() {}

  private onNameChange(value: string) {
    this.detail.fullName = value;
  }

  private toggleEdit(): void {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  private onRemove(): void {
    this.remove.emit(this.detail);
  }
}

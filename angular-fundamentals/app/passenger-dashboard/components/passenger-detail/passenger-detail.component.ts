import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
      <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
      <button (click)="onRemove()">Remove</button>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  private detail: Passenger;
  @Output()
  private edit: EventEmitter<any> = new EventEmitter();
  @Output()
  private remove: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: any): void {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue)
    }
  }

  ngOnInit(): void {}

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

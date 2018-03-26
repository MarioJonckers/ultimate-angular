import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form action="">
      Form!
      <div>
        {{ detail | json }}
      </div>
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  private detail: Passenger;
}

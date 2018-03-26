import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'auth-remember',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked($event.target.checked)">
      Keep me logged in
    </label>
  `
})
export class AuthRememberComponent {
  @Output()
  private checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  private onChecked(value: boolean) {
    this.checked.emit(value);
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})
export class ButtonComponentComponent {
  @Input() title!: string;
  @Input() classButton!: string;
  @Input() disabled!: boolean;
  @Input() action!: any;
  @Output() actionButton: EventEmitter<any> = new EventEmitter<Function>();

  constructor() {
  }

  public clickButton(func: Function): void {
    this.actionButton.emit(func);
  }
}

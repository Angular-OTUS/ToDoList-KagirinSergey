import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() classButton!: string;
  @Input() disabled!: boolean;
  @Input() tooltip!: string;
  public actionButton: EventEmitter<any> = new EventEmitter<any>();

  public clickButton(): void {
    this.actionButton.emit();
  }
}

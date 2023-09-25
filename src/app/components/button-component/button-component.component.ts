import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss'],
})
export class ButtonComponentComponent {
  @Input() title!: string;
  @Input() classButton!: string;
  @Input() disabled!: boolean;
  public actionButton: EventEmitter<any> = new EventEmitter<any>();

  public clickButton(): void {
    this.actionButton.emit();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TFilterStatus } from "../../models/filter-status.model";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() id!: number;
  @Input() text: string = "";
  @Input() status!: TFilterStatus;
  @Output() changeStatus: EventEmitter<any> = new EventEmitter<any>();

  public isChecked!: "checked" | undefined;

  constructor() {
    setTimeout(()=> {
      if(this.status === 'Done') {
        this.isChecked = "checked";
      }
    }, 100);
  }

  public clickCheckbox() {
    this.changeStatus.emit();
  }

}

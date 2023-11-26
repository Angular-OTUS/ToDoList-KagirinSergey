import { Component, EventEmitter, Input } from '@angular/core';
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
  public changeStatus: EventEmitter<any> = new EventEmitter<any>();
  public isChecked!: "checked" | undefined;

  constructor() {
    setTimeout(()=> {
      if(this.status === 'Completed') {
        this.isChecked = "checked";
      }
    }, 100);
  }

  public clickCheckbox() {
    this.changeStatus.emit();
  }

}

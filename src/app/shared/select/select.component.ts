import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFilterTask } from "../../models/filter.model";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() filterData!: IFilterTask[];
  @Output() changeStatus: EventEmitter<any> = new EventEmitter<any>();

  public change(value: string): void {
    this.changeStatus.emit([value]);
  }
}

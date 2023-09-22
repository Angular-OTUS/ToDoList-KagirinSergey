import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToDoItem } from "../../../models/to-do-list.model";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss']
})
export class ToDoListItemComponent {
  @Input() item!: IToDoItem;
  public disabled: boolean = true;
  @Output() delTask: EventEmitter<any> = new EventEmitter<number>();

  public clickDel(id: number): void {
    this.delTask.emit(id);
  }

  constructor() {
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToDoItem } from "../../../models/to-do-list.model";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss']
})
export class ToDoListItemComponent {
  @Input() item!: IToDoItem;
  @Output() delTask: EventEmitter<any> = new EventEmitter<number>();

  public deleteTask(id: number): void {
    this.delTask.emit(id);
  }
}
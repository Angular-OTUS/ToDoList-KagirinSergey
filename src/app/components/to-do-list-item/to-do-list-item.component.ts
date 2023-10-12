import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToDoItem } from "../../models/to-do-list.model";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent {
  @Input() item!: IToDoItem;
  @Output() actionTask: EventEmitter<any> = new EventEmitter<any>();
  public selected = false;

  public clickTask(id: number, isDel = false): void {
    this.actionTask.emit([id, isDel]);
    this.selected = !this.selected;
  }
}

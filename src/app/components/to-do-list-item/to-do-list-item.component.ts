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
  private timer: number;
  private preventSimpleClick: boolean;

  public singleClick(id: number, isDel = false): void {
    this.timer = 0;
    this.preventSimpleClick = false;
    let delay = 200;

    this.timer = setTimeout(() => {
      if(!this.preventSimpleClick){
        this.actionTask.emit([id, isDel]);
      }
    }, delay);
  }

  doubleClick(): void{
    this.preventSimpleClick = true;
    clearTimeout(this.timer);
  ...
  }
}

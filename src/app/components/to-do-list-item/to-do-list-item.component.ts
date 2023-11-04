import { Component, EventEmitter, Input, Output, ViewChild  } from '@angular/core';
import { IToDoItem, TypeAction } from "../../models/to-do-list.model";
// import { InputComponent } from "./../../shared/input/input.component"
import { StoreService } from "../../services/store/store.service";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent {
  @Input() item!: IToDoItem;
  @Output() actionTask: EventEmitter<any> = new EventEmitter<any>();
  private timer!: number;
  private preventSimpleClick!: boolean;
  public isActiveInput = false;
  public taskInput!: string;

  constructor(
    private storeService: StoreService
  ) {   }

  public singleClick(id: number, typeAction: TypeAction): void {
    this.timer = 0;
    this.preventSimpleClick = false;
    let delay = 200;

    this.timer = setTimeout(() => {
      if(!this.preventSimpleClick) {
        this.actionTask.emit([id, typeAction, this.taskInput]);
        this.isActiveInput = false;
      }
    }, delay);
  }

  public doubleClick(id: number): void{
    this.preventSimpleClick = true;
    clearTimeout(this.timer);
    this.isActiveInput = true;
  }

  // public getValue(event?: Event) {
  //   console.log(event, 4)
  // }
}

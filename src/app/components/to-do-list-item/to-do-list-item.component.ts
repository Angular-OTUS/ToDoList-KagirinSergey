import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IToDoItem, TypeAction } from "../../models/to-do-list.model";
import { StoreService } from "../../services/store/store.service";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent implements OnInit {
  @Input() item!: IToDoItem;
  @Output() actionTask: EventEmitter<any> = new EventEmitter<any>();

  public disabled: boolean = true;
  private timer!: number;
  private preventSimpleClick!: boolean;
  public isActiveInput = false;
  public value: string = "";

  constructor() {   }

  public ngOnInit() {
    this.taskHandler("");
  }

  public singleClick(id: number, typeAction: TypeAction): void {
    this.timer = 0;
    this.preventSimpleClick = false;
    let delay = 200;

    this.timer = setTimeout(() => {
      if(!this.preventSimpleClick) {
        this.actionTask.emit([id, typeAction]);
        this.isActiveInput = false;
      }
    }, delay);
  }

  public doubleClick(id: number): void{
    this.preventSimpleClick = true;
    clearTimeout(this.timer);
    this.isActiveInput = true;
  }

  public clickTask(id: number, action: string): void {
    this.actionTask.emit([id, action]);
  }

  public back(): void {
    this.isActiveInput = !this.isActiveInput;
  }

  public taskHandler(task: string): void {
    this.disabled = task.length > 3 ? false : true;
  }

  public action(id: number, typeAction: TypeAction, inputText: string) {
    this.actionTask.emit([id, typeAction, inputText]);
  }
}

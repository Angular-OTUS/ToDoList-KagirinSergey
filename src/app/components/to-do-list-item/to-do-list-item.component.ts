import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IToDoItem, TypeAction, IActionTask } from "../../models/to-do-list.model";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent implements OnInit {
  @Input() item!: IToDoItem;
  @Output() actionTask: EventEmitter<IActionTask> = new EventEmitter<IActionTask>();

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
        const action: IActionTask = { id: id, action: typeAction, text: "" };
        this.actionTask.emit(action);
        this.isActiveInput = false;
      }
    }, delay);
  }

  public doubleClick(id: number): void {
    this.preventSimpleClick = true;
    clearTimeout(this.timer);
    this.isActiveInput = true;
  }

  public clickTask(id: number, action: TypeAction): void {
    const actionTask: IActionTask = { id: id, action: action, text: "" };
    this.actionTask.emit(actionTask);
  }

  public back(): void {
    this.isActiveInput = !this.isActiveInput;
  }

  public taskHandler(task: string): void {
    this.disabled = task.length > 3 ? false : true;
  }

  public action(id: number, typeAction: TypeAction, inputText: string) {
    const action: IActionTask = { id: id, action: typeAction, text: inputText };
    this.actionTask.emit(action);
  }
}

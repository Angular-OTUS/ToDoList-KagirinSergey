import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IToDoItem, TypeAction } from "../../models/to-do-list.model";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent implements OnInit {
  @Input() item!: IToDoItem;
  @Output() actionTask: EventEmitter<any> = new EventEmitter<any>();

  public disabled: boolean = true;
  public isActiveInput = false;
  public value: string = "";

  constructor() { }

  public ngOnInit() {
    this.taskHandler("");
    // console.log(this.item)
  }

  public edit(id: number, typeAction: TypeAction): void {
    this.actionTask.emit([id, typeAction]);
  }

  public editTask(id: number): void {
    this.isActiveInput = true;
  }

  public clickTask(id: number, action: string): void {
    // console.log("2")
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

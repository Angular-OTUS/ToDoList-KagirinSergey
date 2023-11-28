import { Component } from '@angular/core';
import { ToDoListComponent } from "../to-do-list/to-do-list.component";

@Component({
  selector: 'app-to-do-create-item',
  templateUrl: './to-do-create-item.component.html',
  styleUrls: ['./to-do-create-item.component.scss']
})
export class ToDoCreateItemComponent {
  public disabled = true;

  constructor(
    private toDoListComponent: ToDoListComponent,
  ) { }

  public taskHandler(task: string): void {
    this.disabled = task.length > 3 ?  false : true;
  }


  public saveTask(inputText: string, textareaText?: string): void {
    this.toDoListComponent.createTask(inputText, textareaText);
  }
}

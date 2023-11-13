import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StoreService } from "../../services/store/store.service";
import { IToDoItem } from "../../models/to-do-list.model";
import { ToDoListComponent } from "../to-do-list/to-do-list.component";

@Component({
  selector: 'app-to-do-create-item',
  templateUrl: './to-do-create-item.component.html',
  styleUrls: ['./to-do-create-item.component.scss']
})
export class ToDoCreateItemComponent implements OnInit {
  @ViewChild('taskInput') taskInput!: ElementRef;
  public disabled: boolean = true;
  public value: string = "";
  public toDoItems!: IToDoItem[];

  constructor(
    private storeService: StoreService,
    private toDoListComponent: ToDoListComponent,
  ) { }

  public ngOnInit() {
    this.getData();
    this.taskHandler("");
  }

  public getData(): void {
    this.storeService.getData().subscribe(data => {
      this.toDoItems = data;
    }, (error) => {
      console.log(error);
    });
  }

  public taskHandler(task: string): void {
    this.disabled = task.length > 3 ? false : true;
  }

  private getLastId() {
    if(this.toDoItems.length > 0) {
      const max = this.toDoItems.reduce(function(prev, current) {
        return +current.id > +prev.id ? current : prev;
      });
      return max.id;
    }
    return 0;
  }

  public saveTask(inputText: string, textareaText?: string): void {
    const newTask: IToDoItem = {
      id: this.getLastId() + 1,
      text: inputText,
      description: textareaText ? textareaText : "",
      status: "InProgress"
    }
    this.storeService.createTask(newTask).subscribe((data: IToDoItem) => {
      this.toDoListComponent.getData();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";
import { IToDoItem } from "../../models/to-do-list.model";

@Component({
  selector: 'app-to-do-create-item',
  templateUrl: './to-do-create-item.component.html',
  styleUrls: ['./to-do-create-item.component.scss']
})
export class ToDoCreateItemComponent implements OnInit {
  public disabled = true;
  public toDoItems!: IToDoItem[];

  constructor(private storeService: StoreService) { }

  public ngOnInit() {
    this.getData();
  }

  public getData(): void {
    this.storeService.getData().subscribe(data => {
      this.toDoItems = data;
    }, (error) => {
      console.log(error);
    });
  }

  public taskHandler(task: string): void {
    this.disabled = task.length > 3 ?  false : true;
  }

  public reloadTasks() {
    return this.storeService.getData().subscribe((data: IToDoItem[]) => {
      this.toDoItems = data;
    });
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
        this.storeService.getData();
    });
  }
}

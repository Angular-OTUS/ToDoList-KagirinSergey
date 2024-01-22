import { Component, OnInit, Output } from '@angular/core';
import { StoreService } from "../../services/store/store.service";
import { IToast, IToDoItem } from "../../models/to-do-list.model";
import { ToDoListComponent } from "../to-do-list/to-do-list.component";
import { ToastService } from "../../services/toast/toast.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-to-do-create-item',
  templateUrl: './to-do-create-item.component.html',
  styleUrls: ['./to-do-create-item.component.scss']
})
export class ToDoCreateItemComponent implements OnInit {
  // @Output() clear: boolean = false;
  public disabled: boolean = true;
  public toDoItems!: IToDoItem[];
  public isSend: boolean = false;

  constructor(
    private router: Router,
    private storeService: StoreService,
    private toastService: ToastService,
    // private toDoListComponent: ToDoListComponent,
  ) { }
  //
   public ngOnInit() {
     this.getData();
    this.taskHandler("");
   }
  //
  public getData(): void {
    this.storeService.getData().subscribe(data => {
      this.toDoItems = data;
      // console.log(this.toDoItems)
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
      return max.id + 1;
    }
    return 0;
  }

  public saveTask(inputText: string, textareaText?: string): void {
    const newTask: IToDoItem = {
      id: this.getLastId(),
      text: inputText,
      description: textareaText ? textareaText : "",
      status: "ToDo"
    }
    const newToast: IToast = {
      text: inputText,
      description: textareaText ? textareaText : "",
      type: "create"
    }
    this.storeService.createTask(newTask).subscribe((data: IToDoItem) => {
      console.log(data)
      // this.isSend = true;
      // this.toDoListComponent.getData();
      // window.location.href = 'backlog/' + this.getLastId();
      this.router.navigate(['/backlog/' + this.getLastId()]);
    });

    this.toastService.viewToast(newToast);
  }
}

import { Component, OnInit } from '@angular/core';
import { IToDoItem } from "../../models/to-do-list.model";
import { StoreService } from "./../../services/store.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})

export class ToDoListComponent implements OnInit {
  public isLoading = true;
  public disabled = true;
  public selectedItemId!: number;

  constructor(
    private storeService: StoreService
  ) {   }

  public toDoItems: IToDoItem[] = [];

  ngOnInit() {
    this.getData();

    setTimeout(
      () => this.isLoading = false,
      500,
    );
  }

  public getData(): IToDoItem[] {
    return this.toDoItems = this.storeService.getData();
  };

  public taskHandler(task: string): void {
    this.disabled = task.length > 3 ?  false : true;
  }

  public actionItem(array: [number, boolean]): void {

    const id = array[0];console.log(id)
    if (array[1]) {
      this.storeService.delTask(id);
      this.getData();
      console.log(this.getData())
    } else {
      this.selectedItemId = id ? id : 0;
    }
  }

  public saveTask(inputText: string, textareaText?: string): void {
    this.storeService.setData(inputText, textareaText);
    this.getData();
  }

}

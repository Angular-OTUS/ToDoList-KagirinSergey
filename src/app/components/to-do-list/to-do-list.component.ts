import { Component, OnInit } from '@angular/core';
import { IToDoItem, TypeAction } from "../../models/to-do-list.model";
import { StoreService } from "../../services/store/store.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})

export class ToDoListComponent implements OnInit {
  public isLoading = true;
  public disabled = true;
  public selectedItemId!: number;
  public toDoItems: IToDoItem[] = [];
  public showDescription: string = "Выберите описание";

  constructor(
    private storeService: StoreService
  ) {   }

  public ngOnInit() {
    this.getData();

    setTimeout(
      () => this.isLoading = false,
      500,
    );
  }

  public getData(id?: number): IToDoItem[] {
    if(id) {
      return this.toDoItems = this.storeService.getData(id);
    } else {
      return this.toDoItems = this.storeService.getData();
    }
  }

  public taskHandler(task: string): void {
    this.disabled = task.length > 3 ?  false : true;
  }

  public actionItem(array: [id: number, typeAction: TypeAction, text?: string]): void {
    const id = array[0];
    let text = "";
    if(array[2]) {
      text = array[2];
    }
    switch(array[1]) {
      case 'del':
        this.storeService.delTask(id);
        this.getData();
        break;
      case 'selected':
        this.selectedItemId = id ? id : 0;
        const selectedDescription = this.toDoItems[this.selectedItemId]?.description;
        this.showDescription = selectedDescription ? selectedDescription : "Описание отсутствует";
        break;
      case 'update':
        this.storeService.updateTask(id, text);
        break;
    }
  }

  public saveTask(inputText: string, textareaText?: string): void {
    this.storeService.setData(inputText, textareaText);
    this.getData();
  }

}

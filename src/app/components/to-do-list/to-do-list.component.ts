import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { IToDoItem } from "../../models/to-do-list.model";
import { IFilterTask } from "../../models/filter.model";
import { StoreService } from "../../services/store.service";
import filterData from "../../../assets/filter-data.json";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})

export class ToDoListComponent implements OnInit {
  public filterList: IFilterTask[] = filterData;
  public toDoItem!: IToDoItem;
  public toDoItems!: IToDoItem[];
  public unFilteredTasks!: IToDoItem[];
  public isLoading = true;
  public selectedItemId!: number;
  public currentDescription: string | undefined = '';

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    setTimeout(
      () => this.isLoading = false,
      500,
    );

    this.getData();
  }

  public getData(): void {
    this.storeService.getData().subscribe(data => {
      this.toDoItems = data;
      this.unFilteredTasks = this.toDoItems;
    }, (error) => {
      console.log(error);
    });
  }

  public getTask(id: number): Subscription {
    return this.storeService.getTask(id).subscribe((data) => {
      this.toDoItem = data;
      console.log(this.toDoItem, 3);
    }, (error) => {
      console.log(error);
    });
  }

  public updateTask(id: number, task: IToDoItem): void {
    this.storeService.updateTask(id, task).subscribe((data) => {
      this.getData();
    }, (error) => {
      console.log(error);
    });
  }

  public deleteTask(id: number): void {
    this.storeService.deleteTask(id).subscribe((data) => {
      this.getData();
    }, (error) => {
      console.log(error);
    });
  }

  public actionItem(array: [number, string]): void {
    const id = array[0];
    if(array[1] === 'delete') {
      this.deleteTask(id);
      // const itemDel = this.toDoItems.findIndex(el => el.id === id);
      // this.toDoItems.splice(itemDel, 1);
    } else if (array[1] === 'selected') {
      this.selectedItemId = id ? id : 0;
      this.currentDescription =
        this.toDoItems[this.selectedItemId]?.description
          ? this.toDoItems[this.selectedItemId]?.description
          : "Выберите задачу";
    } else if (array[1] === 'change') {
      this.getTask(id);
      this.toDoItems[id].status === 'InProgress'
        ? this.toDoItems[id].status = 'Completed'
        : this.toDoItems[id].status = 'InProgress';
      this.updateTask(id, this.toDoItems[id]);
    }
  }

  public changeStatus(array: [string]) {
    const status = array[0];

    if(status !== "null") {
      this.toDoItems = this.unFilteredTasks.filter(item =>
        item.status === status
      );
    } else {
      this.toDoItems = this.unFilteredTasks;
    }
    return this.toDoItems;
  }



  // public getDesc(id: number): void {
  //   const itemDel = this.toDoItems.findIndex(el => el.id === id)
  //   this.toDoItems.splice(itemDel, 1);
  // }
}

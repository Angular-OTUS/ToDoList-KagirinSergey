import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { Subscription } from "rxjs";
import { IToast, IToDoItem, TypeAction } from "../../models/to-do-list.model";
import { IFilterTask } from "../../models/filter.model";
import { TFilterStatus } from "../../models/filter-status.model";
import { StoreService } from "../../services/store/store.service";
import { ToastService } from "../../services/toast/toast.service";
import { FilteredTasksService } from "../../services/filteredTasks/filtered-tasks.service";
import { TitleService } from "../../services/title/title.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})

export class ToDoListComponent implements OnInit, OnDestroy {
  public toDoItem!: IToDoItem;
  public toDoItems!: IToDoItem[];
  public unFilteredTasks!: IToDoItem[];
  public isLoading = true;
  public selectedItemId!: number;
  public currentDescription: string | undefined = 'Task not selected';
  public currentStatus: TFilterStatus | undefined;
  public value: string = "";
  public id!: number;
  private paramsSub!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storeService: StoreService,
    private toastService: ToastService,
    private filteredTasksService: FilteredTasksService,
    private titleService: TitleService,
    private location: Location
  ) {
  }

  public ngOnInit() {
    setTimeout(
      () => this.isLoading = false,
      500,
    );

    this.getData();

    this.paramsSub = this.route.params.subscribe(params => {
      if(params['id'] !== undefined) {
        this.id = parseInt(params['id'], 10);
        this.selectedItemId = this.id;
        this.getTask(this.id);
      }
    });

    this.filteredTasksService.currentTypeTasks$.subscribe(value => {
      // console.log(value, "88");
      this.changeStatus(value);
    });

    // console.log(this.route.snapshot.data);
    this.getTitle();

  }

  public getTitle(): void {
    // console.log(this.route.snapshot.data["title"]);
    this.titleService.title$.next(this.route.snapshot.data["title"]);
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
      const isEmpty = Object.keys(data).length === 0 && data.constructor === Object;
      if(!isEmpty) {
        this.toDoItem = data;
        this.currentDescription =
          this.toDoItem?.description
            ? this.toDoItem?.description
            : "Описание отсутствует";
        this.currentStatus = this.toDoItem?.status;
      }
    }, (error) => {
      console.log(error);
    });
  }

  public updateTask(id: number, task: IToDoItem): void {
    this.storeService.updateTask(id, task).subscribe((data) => {
      const updateToast: IToast = {
        text: task.text,
        description: task.description,
        type: "info"
      }
      this.toastService.viewToast(updateToast);
      this.getData();
    }, (error) => {
      console.log(error);
    });
  }

  public deleteTask(id: number, text: string, description: string): void {
    this.storeService.deleteTask(id).subscribe((data) => {
      const delToast: IToast = {
        text: text,
        description: description,
        type: "delete"
      }
      this.toastService.viewToast(delToast);
      this.getData();
    }, (error) => {
      console.log(error);
    });
  }

  public actionItem(array: [id: number, typeAction: TypeAction, text?: string]): void {
    const id = array[0];
    const status = array[1];
    if(status === 'delete') {
      // this.getTask(id);
      const changeTask = this.toDoItems.filter(item => item.id === id);
      this.deleteTask(id, changeTask[0].text, changeTask[0].description);
    } else if (status === 'selected') {
      this.selectedItemId = id ? id : 0;
      this.router.navigate(['/backlog/' + id]);
    } else if (status === 'update') {
      const text = array[2];
      if(text){
        // this.getTask(id);
        const changeTask = this.toDoItems.filter(item => item.id === id);
        changeTask[0].text = text;
        this.updateTask(id, changeTask[0]);
      }
    } else if (status === 'change') {
      // this.getTask(id);
      // console.log(id,this.toDoItems, "2323")
      const changeTask = this.toDoItems.filter(item => item.id === id);
      switch (changeTask[0].status) {
        case 'ToDo':
          changeTask[0].status = 'InProgress';
          break;
        case 'InProgress':
          changeTask[0].status = 'Done';
          break;
        case 'Done':
          changeTask[0].status = 'InProgress';
          break;
      }
      // changeTask[0].status === 'InProgress'
      //   ? changeTask[0].status = 'Done'
      //   : changeTask[0].status = 'InProgress';
      this.updateTask(id, changeTask[0]);
    }
  }

  public changeStatus(status: "null" | TFilterStatus) {
    // const status = array[0];
    this.location.go("backlog");
    this.selectedItemId = -1;
    this.currentDescription = 'Task not selected';
    if(status !== "null") {
      this.toDoItems = this.unFilteredTasks.filter(item =>
        item.status === status
      );
    } else {
      this.toDoItems = this.unFilteredTasks;
    }
    return this.toDoItems;
  }

  public ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}

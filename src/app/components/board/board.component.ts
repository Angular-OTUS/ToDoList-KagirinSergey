import { Component, OnInit } from '@angular/core';
import {IToast, IToDoItem, TypeAction} from "../../models/to-do-list.model";
import { TFilterStatus } from "../../models/filter-status.model";
import { ActivatedRoute, Router } from "@angular/router";
import { StoreService } from "../../services/store/store.service";
import { TitleService } from "../../services/title/title.service";
import {ToastService} from "../../services/toast/toast.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public toDoItems!: IToDoItem[];
  public filteredTasks!: IToDoItem[];
  public selectedItemId!: number;
  public isLoading = true;
  public value: string = "";
  public id!: number;
  public status: TFilterStatus[] = ['ToDo', 'InProgress', 'Done'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storeService: StoreService,
    private titleService: TitleService,
    private toastService: ToastService,
  ) { }

  public ngOnInit() {
    setTimeout(
      () => this.isLoading = false,
      500,
    );

    this.getData();
    this.getTitle();
  }

  public getTitle(): void {
    // console.log(this.route.snapshot.data["title"]);
    this.titleService.title$.next(this.route.snapshot.data["title"]);
  }

  public getData(): void {
    this.storeService.getData().subscribe(data => {
      this.toDoItems = data;
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

  public getColumnTasks(column: TFilterStatus): number {
    this.filteredTasks = this.toDoItems.filter(item => item.status === column);
    return this.filteredTasks.length;
  }

}

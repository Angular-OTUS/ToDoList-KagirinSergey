import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {TitleService} from "./services/title/title.service";
// import { ActivatedRoute, Data } from '@angular/router';
// import { ToastService } from "./services/toast/toast.service";
// import {IToDoItem} from "./models/to-do-list.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'ToDoList';
  pageTitle = 'default page title';
  // public toDoItems: IToDoItem[] = [];
  // public text!: string;
  // public description!: string;


  constructor(
    // private toastService: ToastService
    private route: ActivatedRoute,
  ) {   }

  public ngOnInit() {


    // this.toDoItems = this.toastService.getData();
    // console.log(this.toastService.getData(), 4)
    // if(this.toDoItems.length > 0) {
    //   this.toDoItems.forEach((item, index) => {
    //     setTimeout(()=> {
    //       this.getToast(item.text, item.description);
    //     }, 1000 * (index + 1));
    //   });
    // }
  }

  // public getToast(text: string, description: string) {
  //   console.log(text)
  //   this.text = text;
  //   this.description = description;
  // }
}

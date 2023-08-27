import { Component, OnInit } from '@angular/core';
import { IToDoList } from "../../models/to-do-list.model";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {
  public task: string = "";
  public disabled = true;
  public toDoList: IToDoList[] = [
    {
      id: 0,
      text: "Сходить в магазин"
    },
    {
      id: 1,
      text: "Помыть окно"
    },
    {
      id: 2,
      text: "Оплатить интернет"
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  private getLastId() {
    const max = this.toDoList.reduce(function(prev, current) {
      return +current.id > +prev.id ? current : prev;
    });
    return max.id;
  }

  public saveTask(text: string):void {
    this.toDoList.push({ id: this.getLastId() + 1, text: text });
    console.log(this.toDoList);
  }

  public delTask(id: number):void {
    const itemDel = this.toDoList.findIndex(el => el.id === id)
    this.toDoList.splice(itemDel, 1);
  }

  public taskHandler(task: string): void {
    console.log(task.length);
    this.disabled = task.length > 3 ?  false : true;
  }
}

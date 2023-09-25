import {Component, Input, OnInit } from '@angular/core';
import { IToDoItem } from "../../models/to-do-list.model";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {
  public task: string = "";
  public disabled = true;
  public toDoItems: IToDoItem[] = [
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

  public saveTask(text: string): void {
    this.toDoItems.push({ id: this.getLastId() + 1, text: text });
    console.log(this.toDoItems);
  }

  public delItem(id: number): void {
    const itemDel = this.toDoItems.findIndex(el => el.id === id)
    this.toDoItems.splice(itemDel, 1);
  }

  public taskHandler(task: string): void {
    console.log(task.length);
    this.disabled = task.length > 3 ?  false : true;
  }

  private getLastId() {
    if(this.toDoItems.length > 0) {
      const max = this.toDoItems.reduce(function(prev, current, index) {
        return +current.id > +prev.id ? current : prev;
      });
      return max.id;
    }
    return 0;
  }
}

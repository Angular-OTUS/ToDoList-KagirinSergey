import {Component, OnInit } from '@angular/core';
import { IToDoItem } from "../../models/to-do-list.model";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})

export class ToDoListComponent implements OnInit {
  public task = "";
  public toDoItems: IToDoItem[] = [
    {
      id: 0,
      text: "Сходить в магазин",
    },
    {
      id: 1,
      text: "Помыть окно",
    },
    {
      id: 2,
      text: "Оплатить интернет",
    },
  ];

  public isLoading = true;
  public disabled = true;

  ngOnInit() {
    setTimeout(
      () => this.isLoading = false,
      500,
    );
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

  public taskHandler(task: string): void {
    this.disabled = task.length > 3 ?  false : true;
  }

  public delItem(id: number): void {
    const itemDel = this.toDoItems.findIndex(el => el.id === id)
    this.toDoItems.splice(itemDel, 1);
  }

  public saveTask(text: string): void {
    this.toDoItems.push({ id: this.getLastId() + 1, text: text });
    console.log(this.toDoItems);
  }
}

import { Injectable } from '@angular/core';
import data from './../../assets/data.json';
import { IToDoItem } from "../models/to-do-list.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private toDoItems: IToDoItem[] = data;
  constructor() { }

  public getData(): IToDoItem[] {
    return this.toDoItems;
  }

  private getNextId() {
    const tasks = this.getData();
    if(tasks.length > 0) {
      const max = tasks.reduce(function(prev, current) {
        return +current.id > +prev.id ? current : prev;
      });
      return max.id + 1;
    }
    return 0;
  }

  public setData(title: string, description?: string): void {
    const newTask = {
      "id": this.getNextId(),
      "text": title,
      "description": description ? description : ""
    };
    this.toDoItems.push(newTask);
  }

  public delTask(id: number) {
    const itemDel = this.toDoItems.findIndex(el => el.id === id)
    this.toDoItems.splice(itemDel, 1);
  }


}

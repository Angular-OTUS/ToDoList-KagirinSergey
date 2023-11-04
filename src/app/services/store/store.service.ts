import { Injectable } from '@angular/core';
import { IToDoItem } from "../../models/to-do-list.model";
import { ToastService } from "../toast/toast.service";
import data from '../../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private toDoItems: IToDoItem[] = data;

  constructor(
    private toastServices: ToastService
  ) { }

  public getData(id?: number): IToDoItem[] {
    return id ? [this.toDoItems[id]] : this.toDoItems;
  }

  public getNextId() {
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
    this.toastServices.setData(newTask);
  }

  public delTask(id: number): void {
    const itemDel = this.toDoItems.findIndex(el => el.id === id)
    this.toDoItems.splice(itemDel, 1);
  }

  public updateTask(id: number, text: string): void {
    this.toDoItems[id].text = text;
  }
}

import { Component, OnInit } from '@angular/core';
import { IToDoItem } from "../../models/to-do-list.model";
// import { TooltipDirective } from "../../directives/tooltip/tooltip.directive";

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
      description: "Купить продукты, газировку и зубную пасту",
    },
    {
      id: 1,
      text: "Помыть окно",
      description: "Помыть окно в спальне, на кухне и на балконе",
    },
    {
      id: 2,
      text: "Оплатить интернет",
      description: "Оплатить интернет до 15 октября",
    },
  ];

  public isLoading = true;
  public disabled = true;
  public selectedItemId!: number;

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

  public actionItem(array: [number, boolean]): void {
    const id = array[0];
    if (array[1]) {
      const itemDel = this.toDoItems.findIndex(el => el.id === id)
      this.toDoItems.splice(itemDel, 1);
    } else {
      this.selectedItemId = id ? id : 0;
    }
  }

  public saveTask(text: string): void {
    this.toDoItems.push({ id: this.getLastId() + 1, text: text, description: "111" });
  }

  public getDesc(id: number): void {
    const itemDel = this.toDoItems.findIndex(el => el.id === id)
    this.toDoItems.splice(itemDel, 1);
  }
}

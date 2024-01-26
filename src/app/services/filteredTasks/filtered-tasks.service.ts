import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { TFilterStatus } from "../../models/filter-status.model";

@Injectable({
  providedIn: 'root'
})
export class FilteredTasksService {
  public currentTypeTasks$ = new BehaviorSubject<"null" | TFilterStatus>("null");
  constructor() {
    this.currentTypeTasks$.subscribe(value => {
      // console.log(value);
    })
  }

  public getData() {
    return this.currentTypeTasks$.getValue();
  }

}

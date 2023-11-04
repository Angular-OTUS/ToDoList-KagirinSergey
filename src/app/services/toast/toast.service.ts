import { Injectable } from '@angular/core';
import { IToDoItem } from "../../models/to-do-list.model";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private subject = new Subject<any>();

  constructor( ) { }

  public setData(newTask: IToDoItem): void {
    this.subject.next(newTask);
  }

  public getTasks(): Observable<any> {
    return this.subject.asObservable();
  }
}

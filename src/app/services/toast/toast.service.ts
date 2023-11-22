import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { IToast } from "../../models/to-do-list.model";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public subject = new Subject<any>();

  constructor( ) { }

  public viewToast(toast: IToast) {
    this.subject.next(toast);
  }
}

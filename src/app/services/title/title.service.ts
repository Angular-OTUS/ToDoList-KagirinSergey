import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public title$ = new BehaviorSubject<string>("Backlog");
  constructor() { }

  public getData() {
    return this.title$.getValue();
  }
}

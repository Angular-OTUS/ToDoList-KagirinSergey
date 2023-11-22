import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { IToDoItem } from "../../models/to-do-list.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getData(): Observable<IToDoItem[]> {
    return this.http.get<IToDoItem[]>(
      this.url + '/tasks'
    ).pipe(retry(1), catchError(this.handleError));
  }

  public getTask(id: number): Observable<IToDoItem> {
    return this.http.get<IToDoItem>(
      this.url + '/tasks/' + id
    ).pipe(retry(1), catchError(this.handleError));
  }

  public createTask(task: IToDoItem): Observable<IToDoItem> {
    return this.http.post<IToDoItem>(
      this.url + '/tasks',
      JSON.stringify(task),
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError));
  }

  public updateTask(id: number, task: IToDoItem): Observable<IToDoItem> {
    return this.http
      .put<IToDoItem>(
        this.url + '/tasks/' + id,
        JSON.stringify(task),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  public deleteTask(id: number) {
    return this.http
      .delete<IToDoItem>(
        this.url + '/tasks/' + id, this.httpOptions
      ).pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

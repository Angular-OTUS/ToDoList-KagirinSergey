import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IToDoItem } from "../../models/to-do-list.model";
import { StoreService } from "../../services/store/store.service";
import { Subscription } from 'rxjs';
import { ToastService } from "../../services/toast/toast.service";

interface ngAfterViewInit {
}

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, ngAfterViewInit, OnDestroy {
  private subscription!: Subscription;
  public isVisible = true;
  public toDoItems!: IToDoItem[];

  @ViewChildren('toasts') toasts!: QueryList<ElementRef>;

  constructor(
    private toastService: ToastService,
    private storeService: StoreService
  ) {
    // this.subscription = this.toastService
    //   .getTasks()
    //   .subscribe((lastTask) => {
    //     this.viewToggleToast([lastTask], lastTask.id);
    //   });
  }

  public ngOnInit(): void {
    //this.getData();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getData(): void {
    this.storeService.getData().subscribe(data => {
      this.toDoItems = data;
    }, (error) => {
      console.log(error);
    });
  }

  public ngAfterViewInit(): void {
    //this.viewToggleToast(this.toDoItems);
  }

  public viewToggleToast(tasks: IToDoItem[], newTaskId?: number) {
    if (tasks.length) {
      let i = 1;
      if (!this.isVisible) {
        this.isVisible = true;
      }
      this.toasts.forEach((div: ElementRef) => {
        if(newTaskId) {
          div.nativeElement.classList.add("active");
        } else {
          setTimeout(()=> {
            div.nativeElement.classList.add("active");
          }, 1000 * i);
        }
        i++;
      });
      setTimeout(()=> {
        this.toasts.forEach((div: ElementRef) => {
          setTimeout(()=> {
            div.nativeElement.classList.remove("active");
          }, 1000 * i);
          i++;
        });
      }, 2000 * i);
    }
  }
}

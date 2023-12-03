import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastService } from "../../services/toast/toast.service";
import { IToast, TToast } from "../../models/to-do-list.model";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  public text!: string;
  public description!: string;
  public type!: TToast;
  public isVisible = true;

  @ViewChild('toasts') toast!: ElementRef;

  constructor(
    public toastService: ToastService,
  ) {
    this.toastService.subject.subscribe((data) => {
      this.viewToast(data);
    });
  }

  public viewToast(data: IToast) {
    if (!this.isVisible) {
      this.isVisible = true;
    }

    this.text = data.text;
    if(data.description) {
      this.description = data.description;
    }
    this.type = data.type;

    setTimeout(()=> {
      this.toast.nativeElement.classList.add("active");
    }, 1000);

    this.hideToast();
  }

  public hideToast() {
    setTimeout(()=> {
      this.toast.nativeElement.classList.remove("active");
    }, 3000);
  }
}

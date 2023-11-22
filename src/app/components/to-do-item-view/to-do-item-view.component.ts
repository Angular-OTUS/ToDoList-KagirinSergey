import { Component, Input } from '@angular/core';
import { TFilterStatus } from "../../models/filter-status.model";

@Component({
  selector: 'app-to-do-item-view',
  templateUrl: './to-do-item-view.component.html',
  styleUrls: ['./to-do-item-view.component.scss']
})
export class ToDoItemViewComponent {
  @Input() description!: string | undefined;
  @Input() status!: TFilterStatus | undefined;

}

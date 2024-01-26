import { Component, Input, OnInit } from '@angular/core';
import { IFilterTask } from "../../models/filter.model";
import { FilteredTasksService } from "../../services/filteredTasks/filtered-tasks.service";
import { TFilterStatus } from "../../models/filter-status.model";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() filterData!: IFilterTask[];
  public selected!: "null" | TFilterStatus;

  constructor(
    private filteredTasksService: FilteredTasksService
  ) { }

  public ngOnInit() {
    // console.log(this.filteredTasksService.getData())
    this.selected = this.filteredTasksService.getData();
  }


  public change(value: any): void {
    // this.changeStatus.emit([value]);
    this.filteredTasksService.currentTypeTasks$.next(value);
  }
}

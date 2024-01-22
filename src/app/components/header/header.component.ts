import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { IFilterTask } from "../../models/filter.model";
import filterData from "../../../assets/filter-data.json";
import {TitleService} from "../../services/title/title.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public path!: string;
  private paramsSub!: Subscription;
  public filterList: IFilterTask[] = filterData;
  public title!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: TitleService,
  ) {
  }

  public ngOnInit() {
    this.titleService.title$.subscribe(value => {
      this.title = value;
    });
  }

  public ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}

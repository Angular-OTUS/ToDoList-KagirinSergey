import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { IFilterTask } from "../../models/filter.model";
import { TitleService } from "../../services/title/title.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public path!: string;
  private paramsSub!: Subscription;
  public title!: string;
  public filterList: IFilterTask[] = [
    {
      id: 0,
      title: $localize `All`,
      status: "null",
      selected: true
    },
    {
      id: 1,
      title: $localize `New`,
      status: "ToDo"
    },
    {
      id: 2,
      title: $localize `Progress`,
      status: "InProgress"
    },
    {
      id: 3,
      title: $localize `Complete`,
      status: "Done"
    }
  ];

  localesList = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' }
  ];

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

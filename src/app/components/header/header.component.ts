import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public path!: string;
  private paramsSub!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
  }

  public ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}

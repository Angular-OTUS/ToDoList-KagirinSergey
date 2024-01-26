import { Component } from '@angular/core';
import { IMenu } from "../../models/menu.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menu: IMenu[] = [
    {
      name: $localize `Backlog`,
      link: "backlog",
    },
    {
      name: $localize `Board`,
      link: "board"
    }
  ];
}

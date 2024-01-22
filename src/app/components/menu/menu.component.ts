import { Component } from '@angular/core';
import { IMenu } from "../../models/menu.model";
import config from "../../../assets/config.json"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menu: IMenu[] = config;

}

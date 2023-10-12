// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'tooltip',
//   templateUrl: './tooltip.component.html',
//   styleUrls: ['./tooltip.component.scss']
// })
// export class TooltipComponent implements OnInit {
//
//   tooltip: string = '';
//   left: number = 0;
//   top: number = 0;
//
//   constructor() {}
//
//   ngOnInit(): void {}
//
// }


import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Basic tooltip
 */
@Component({
  selector: 'tooltip',
  templateUrl: 'tooltip.component.html',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
})
export class TooltipComponent {}

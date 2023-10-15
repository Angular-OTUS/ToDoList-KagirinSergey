import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ButtonComponent } from './button/button.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ButtonComponent,
    TooltipDirective,
  ],
})

export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ButtonComponent } from './button/button.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

import { MaterialModule } from './../material/material.module';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
    InputComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
    exports: [
        ButtonComponent,
        TooltipDirective,
        InputComponent,
    ],
})

export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ButtonComponent } from './button/button.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

import { MaterialModule } from './../material/material.module';
import { LoaderComponent } from './loader/loader.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
    LoaderComponent,
    CheckboxComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
    exports: [
        ButtonComponent,
        TooltipDirective,
        LoaderComponent,
        CheckboxComponent,
        SelectComponent,
    ],
})

export class SharedModule {}

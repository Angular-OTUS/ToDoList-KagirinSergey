import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ButtonComponent } from './button/button.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { MaterialModule } from './../material/material.module';
import { InputComponent } from './input/input.component';
import { LoaderComponent } from './loader/loader.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';


@NgModule({
  declarations: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
    InputComponent,
    LoaderComponent,
    CheckboxComponent,
    SelectComponent,
    TextareaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
    exports: [
        ButtonComponent,
        TooltipDirective,
        InputComponent,
        LoaderComponent,
        CheckboxComponent,
        SelectComponent,
        TextareaComponent,
    ],
})

export class SharedModule {}

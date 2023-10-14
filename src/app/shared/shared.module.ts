import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ButtonComponent } from './button/button.component';

import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ButtonComponent,
  ],
})

export class SharedModule {}

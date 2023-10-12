import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ButtonComponent } from './button/button.component';
// import { TooltipModule } from "../directives/tooltip/tooltip.module";

// import { TooltipComponent } from "./tooltip/tooltip.component"
// import { TooltipDirective } from "./../directives/tooltip/tooltip.directive";


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    // TooltipComponent,
  ],
  declarations: [
    ButtonComponent,
    // TooltipDirective,
  ],
})

export class SharedModule {}

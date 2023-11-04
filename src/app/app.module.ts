import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "./shared/shared.module";
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import { ToastComponent } from './components/toast/toast.component';
import { StoreService } from "./services/store/store.service";
import { ToastService } from "./services/toast/toast.service";

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [
    StoreService,
    ToastService,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }

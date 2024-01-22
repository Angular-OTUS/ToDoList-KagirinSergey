import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from "./shared/shared.module";
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import { ToDoCreateItemComponent } from './components/to-do-create-item/to-do-create-item.component';
import { ToastComponent } from './shared/toast/toast.component';
import { StoreService } from "./services/store/store.service";
import { ToastService } from "./services/toast/toast.service";
import { ToDoItemViewComponent } from './components/to-do-item-view/to-do-item-view.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BoardComponent } from './components/board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    ToDoCreateItemComponent,
    ToastComponent,
    ToDoItemViewComponent,
    HeaderComponent,
    MenuComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    StoreService,
    ToastService,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }

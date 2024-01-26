import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from "./components/to-do-list/to-do-list.component";
import { ToDoCreateItemComponent } from "./components/to-do-create-item/to-do-create-item.component";
import { BoardComponent } from "./components/board/board.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'backlog',
    pathMatch: "full"
  },
  {
    path: 'backlog',
    data: {
      title: 'Backlog'
    },
    children: [
      {
        path: '',
        component: ToDoListComponent,
      },
      {
        path: ':id',
        component: ToDoListComponent,
      },
    ],
  },
  {
    path: 'board',
    data: {
      title: 'Board'
    },
    children: [
      {
        path: '',
        component: BoardComponent,
      },
      {
        path: ':id',
        component: BoardComponent,
      },
    ],
  },
  {
    path: 'create',
    component: ToDoCreateItemComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

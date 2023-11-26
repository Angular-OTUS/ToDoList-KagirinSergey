import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from "./components/to-do-list/to-do-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'backlog',
    pathMatch: "full"
  },
  {
    path: 'backlog',
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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

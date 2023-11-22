import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from "./components/to-do-list/to-do-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: "full"
  },
  {
    path: 'tasks',
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

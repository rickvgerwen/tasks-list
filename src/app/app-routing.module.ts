import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'tasks',
        loadChildren: () => import('@modules/tasks/tasks.module').then((m) => m.TasksModule),
      },
      {
        path: 'crud',
        loadChildren: () => import('@modules/crud/crud.module').then((m) => m.CrudModule),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

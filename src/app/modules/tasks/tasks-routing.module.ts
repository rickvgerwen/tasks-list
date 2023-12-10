import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksOverviewComponent } from './page/tasks-overview/tasks-overview.component';
import { TaskDetailComponent } from './page/task-detail/task-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TasksOverviewComponent,
  },
  {
    path: ':id',
    component: TaskDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksOverviewComponent } from './page/tasks-overview/tasks-overview.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TaskDetailComponent } from './page/task-detail/task-detail.component';

@NgModule({
  declarations: [TasksOverviewComponent, TaskDetailComponent],
  imports: [CommonModule, TasksRoutingModule, SharedModule, FormsModule],
})
export class TasksModule {}

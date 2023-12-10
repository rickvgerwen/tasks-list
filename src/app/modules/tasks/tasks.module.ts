import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './page/tasks.component';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, TasksRoutingModule],
})
export class TasksModule {}

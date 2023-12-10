import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './page/tasks.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, TasksRoutingModule, SharedModule],
})
export class TasksModule {}

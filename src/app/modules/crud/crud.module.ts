import { NgModule } from '@angular/core';
import { CrudRoutingModule } from './crud-routing.module';
import { AddComponent } from './page/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, CrudRoutingModule, FormsModule, ReactiveFormsModule],
})
export class CrudModule {}

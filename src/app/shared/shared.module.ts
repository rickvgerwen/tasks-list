import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreCodeComponent } from './helper/pre-code/pre-code.component';
import { ListCardComponent } from './components/list-card/list-card.component';

@NgModule({
  declarations: [PreCodeComponent, ListCardComponent],
  imports: [CommonModule],
  exports: [PreCodeComponent, ListCardComponent],
})
export class SharedModule {}

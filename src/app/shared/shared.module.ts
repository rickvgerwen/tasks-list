import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreCodeComponent } from './helpers/pre-code/pre-code.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { HighlightFilterPipe } from './pipes/highlight-filter.pipe';

@NgModule({
  declarations: [PreCodeComponent, ListCardComponent, HighlightFilterPipe],
  imports: [CommonModule],
  exports: [PreCodeComponent, ListCardComponent, HighlightFilterPipe],
})
export class SharedModule {}

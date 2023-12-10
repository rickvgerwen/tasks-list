import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightFilterPipe } from './pipes/highlight-filter.pipe';

@NgModule({
  declarations: [HighlightFilterPipe],
  imports: [CommonModule],
  exports: [HighlightFilterPipe],
})
export class SharedModule {}

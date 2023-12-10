import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreCodeComponent } from './helpers/pre-code/pre-code.component';
import { HighlightFilterPipe } from './pipes/highlight-filter.pipe';

@NgModule({
  declarations: [PreCodeComponent, HighlightFilterPipe],
  imports: [CommonModule],
  exports: [PreCodeComponent, HighlightFilterPipe],
})
export class SharedModule {}

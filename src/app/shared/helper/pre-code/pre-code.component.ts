import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pre-code',
  templateUrl: './pre-code.component.html',
  styleUrls: ['./pre-code.component.scss'],
})
export class PreCodeComponent {
  @Input() input: unknown;
}

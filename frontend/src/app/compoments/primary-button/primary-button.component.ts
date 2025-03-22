import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  label = input('')
  @Input() disabled: boolean = false;
  btnClicked = output()
}

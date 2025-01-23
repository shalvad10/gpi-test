import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-checkbox.component.html',
  styleUrl: './custom-checkbox.component.scss'
})
export class CustomCheckboxComponent {

  @Input() label!: string;
  @Input() disabled: boolean = false;
  @Input() id!: string;
}

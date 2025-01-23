import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circle-icon.component.html',
  styleUrl: './circle-icon.component.scss'
})
export class CircleIconComponent {

  @Input() unread: boolean = true;
  @Input() iconName: string = 'bell';
}

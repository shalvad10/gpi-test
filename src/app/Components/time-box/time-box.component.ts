import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-box.component.html',
  styleUrl: './time-box.component.scss'
})
export class TimeBoxComponent {

  @Input() startTime?: string;
  @Input() endTime?: string;
  public boxSelected: boolean = false;

  toggleBox() {
    this.boxSelected = !this.boxSelected;
  }

}

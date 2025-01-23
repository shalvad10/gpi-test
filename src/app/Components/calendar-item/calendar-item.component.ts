import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Calendar } from '../../interfaces';

@Component({
  selector: 'app-calendar-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-item.component.html',
  styleUrl: './calendar-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarItemComponent {

  public isSelected: boolean = false;
  @Input() date!: Calendar;

  public toggleSelection(): void {
    this.isSelected = !this.isSelected;
  }
}

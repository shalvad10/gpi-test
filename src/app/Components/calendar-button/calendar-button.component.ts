import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Calendar } from '../../interfaces';

@Component({
  selector: 'app-calendar-button',
  standalone: true,
  imports: [],
  templateUrl: './calendar-button.component.html',
  styleUrl: './calendar-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarButtonComponent {

  @Input() todaysDate!: Calendar;

}

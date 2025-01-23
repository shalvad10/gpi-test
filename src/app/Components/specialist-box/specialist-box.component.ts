import { Component, Input } from '@angular/core';
import { Specialist } from '../../interfaces';
import { TimeBoxComponent } from '../time-box/time-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specialist-box',
  standalone: true,
  imports: [CommonModule, TimeBoxComponent],
  templateUrl: './specialist-box.component.html',
  styleUrl: './specialist-box.component.scss'
})
export class SpecialistBoxComponent {

  @Input() specialist!: Specialist;
  @Input() isMobile!: boolean;

}

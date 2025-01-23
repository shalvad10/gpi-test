import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-radio.component.html',
  styleUrl: './custom-radio.component.scss'
})
export class CustomRadioComponent {

  @Input() label!: string;
  @Input() secondaryText?: string;
  @Input() id!: string;
  @Input() withIcon: boolean = false;
  @Input() iconName?: string;
  @Input() clinicData?: any;
  
  // { name: 'კურაციო', address: 'ოთარ ლორთქიფანიძის #31', img: '/test_avatar.png'};
}

import { Component, Input } from '@angular/core';
import { CircleIconComponent } from "../circle-icon/circle-icon.component";

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CircleIconComponent],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.scss'
})
export class UserPanelComponent {

  @Input() isMobile?: boolean;
}

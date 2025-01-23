import { Component, Input } from '@angular/core';
import { LanguageSwircherComponent } from '../language-swircher/language-swircher.component';
import { CircleIconComponent } from '../circle-icon/circle-icon.component';
import { UserPanelComponent } from "../user-panel/user-panel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageSwircherComponent, CircleIconComponent, UserPanelComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() isMobile?:boolean;

}

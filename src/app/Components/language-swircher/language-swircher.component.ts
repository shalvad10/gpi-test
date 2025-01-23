import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-swircher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-swircher.component.html',
  styleUrl: './language-swircher.component.scss'
})
export class LanguageSwircherComponent {

  @Input() isMobile?: boolean;

  public selectedLang: string = 'geo';
  public readonly languages: string[] = ['eng', 'geo'];

  public switchLanguage() {
    this.selectedLang = this.languages.filter( lang => lang !== this.selectedLang)[0];
  }

}

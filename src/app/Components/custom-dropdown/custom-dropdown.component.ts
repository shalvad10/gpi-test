import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-dropdown.component.html',
  styleUrl: './custom-dropdown.component.scss'
})
export class CustomDropdownComponent {

  @Input() placeholder: string = 'Select an option';
  @Input() options: { value: string; label: string }[] = [];
  selectedValue: string | null = null;

  onSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedValue = target.value;
  }

  getSelectedLabel(): string {
    const selectedOption = this.options.find((opt) => opt.value === this.selectedValue);
    return selectedOption ? selectedOption.label : '';
  }

}

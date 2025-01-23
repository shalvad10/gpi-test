import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  
  public steps: number[] = [];

  @Input() isMobile?: boolean;

  @Input() set setSteps(val:number) {
    this.steps = Array.from({length: val}, (_, i) => i + 1);
  }
  @Input() currentStep: number = 4;

  changeStep(step: number) {
    this.currentStep = step;
  }

}

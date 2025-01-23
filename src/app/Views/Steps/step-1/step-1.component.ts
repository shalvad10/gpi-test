import { Component } from '@angular/core';
import { CustomRadioComponent } from "../../../Components/custom-radio/custom-radio.component";
import { CustomInputComponent } from "../../../Components/custom-input/custom-input.component";

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [CustomRadioComponent, CustomInputComponent],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.scss'
})
export class Step1Component {

  public forOther: boolean = true;
}

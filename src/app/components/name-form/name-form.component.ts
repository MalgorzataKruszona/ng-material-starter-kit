import { ChangeDetectionStrategy, 
  Component, 
  ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-name-form',
  styleUrls: ['./name-form.component.scss'],
  templateUrl: './name-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameFormComponent {
  readonly formName: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]) });

  onFormNameSubmitted(formName: FormGroup): void {
    console.log('nameForm.value')
  }
}

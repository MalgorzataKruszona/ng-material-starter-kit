import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-age-form',
  styleUrls: ['./age-form.component.scss'],
  templateUrl: './age-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeFormComponent {
  readonly ageForm: FormGroup =
    new FormGroup({
      age: new FormControl(18, Validators.min(18))
    });

  onAgeFormSubmitted(ageForm: FormGroup): void {
    console.log(ageForm.value);
  }
}

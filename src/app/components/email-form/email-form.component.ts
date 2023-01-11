import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  styleUrls: ['./email-form.component.scss'],
  templateUrl: './email-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailFormComponent {
  readonly emailName:
    FormGroup =
    new FormGroup({
      email: new FormControl('', Validators.email)
    });

  onEmailNameSubmitted(emailName: FormGroup): void {
    console.log(emailName.value);
  }
}

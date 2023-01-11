import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRolesModel } from '../../models/user-roles.model';
import { PolishUniversitiesService } from '../../services/polish-universities.service';

@Component({
  selector: 'app-polish-universities',
  styleUrls: ['./polish-universities.component.scss'],
  templateUrl: './polish-universities.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolishUniversitiesComponent {
  readonly polishUniversities:
    FormGroup = new
      FormGroup({
        name: new FormControl('', Validators.required)
      });
  readonly polishUniversities$: Observable<UserRolesModel[]> = this._polishUniversitiesService.getAll();

  constructor(private _polishUniversitiesService: PolishUniversitiesService) {
  }

  onPolishUniversitiesSubmitted(polishUniversities: FormGroup): void {
  }
}

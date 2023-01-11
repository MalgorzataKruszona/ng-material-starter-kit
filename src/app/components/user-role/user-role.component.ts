import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRolesModel } from '../../models/user-roles.model';
import { UserRoleService } from '../../services/user-role.service';

@Component({
  selector: 'app-user-role',
  styleUrls: ['./user-role.component.scss'],
  templateUrl: './user-role.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRoleComponent {
  readonly userRole: FormGroup =
    new FormGroup({
      id: new FormControl(),
      role: new FormControl('', Validators.required)
    });
  readonly role$: Observable<UserRolesModel[]> = this._userRoleService.getAllRoles();

  constructor(private _userRoleService: UserRoleService) {
  }

  onFormNameSubmitted(userRole: FormGroup): void {
    console.log('userRole.value');

  }

}

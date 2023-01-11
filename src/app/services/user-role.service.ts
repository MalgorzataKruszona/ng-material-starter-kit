import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRolesModel } from '../models/user-roles.model';

@Injectable({ providedIn: 'root' })
export class UserRoleService {
  constructor(private _httpClient: HttpClient) {
  }

 

  getAllRoles(): Observable<UserRolesModel[]> {
    return this._httpClient.get<UserRolesModel[]>
    (
      'https://636ce2d8ab4814f2b2712854.mockapi.io/roles'
      );
  }


}

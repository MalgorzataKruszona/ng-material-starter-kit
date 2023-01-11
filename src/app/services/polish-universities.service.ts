import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRolesModel } from '../models/user-roles.model';

@Injectable({ providedIn: 'root' })
export class PolishUniversitiesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UserRolesModel[]> {
    return this._httpClient.get<UserRolesModel[]>("http://universities.hipolabs.com/search?country=Poland");
  }
}

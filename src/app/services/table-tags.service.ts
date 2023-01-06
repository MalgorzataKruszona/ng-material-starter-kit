import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableTagsModel } from '../models/table-tags.model';

@Injectable({ providedIn: 'root' })
export class TableTagsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<TableTagsModel[]> {
    return this._httpClient.get<TableTagsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }
}

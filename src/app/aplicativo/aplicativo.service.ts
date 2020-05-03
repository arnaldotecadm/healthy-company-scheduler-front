import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { SoftwareModel } from './software.model';
import { UpdateModel } from './update.model';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root',
})
export class AplicativoService {
  constructor(private http: HttpClient) {}

  salvarRegistro(registro: SoftwareModel) {
    return this.http.post<SoftwareModel>(
      API + '/user-management/software/add',
      registro
    );
  }

  getAll() {
    return this.http.get<SoftwareModel[]>(
      API + '/user-management/software/all'
    );
  }

  getById(softwareId: number) {
    return this.http.get<SoftwareModel>(
      API + '/user-management/software/id/' + softwareId
    );
  }

  removeById(softwareId: number) {
    return this.http.delete<SoftwareModel[]>(
      API + '/user-management/software/remove/' + softwareId
    );
  }

  addUpdateNote(updateNote: UpdateModel) {
    return this.http.post<SoftwareModel[]>(
      API + '/user-management/software/add-update-notes',
      updateNote
    );
  }
}

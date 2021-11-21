import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Local } from './local.interface';

const API = environment.ApiUrl;
const context = '/';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor(private http: HttpClient) {}

  salvarRegistro(registro: Local) {
    return this.http.post<Local>(API + context + 'local/add', registro);
  }

  getAll() {
    return this.http.get<Local[]>(API + context + 'local/all');
  }

  getById(usuarioId: number) {
    return this.http.get<Local>(API + context + 'local/id/' + usuarioId);
  }

  removeById(usuarioId: number) {
    return this.http.delete<Local[]>(
      API + context + 'local/remove/' + usuarioId
    );
  }
}

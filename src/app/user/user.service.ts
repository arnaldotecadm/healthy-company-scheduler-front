import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './user.interface';
import { environment } from '../../environments/environment';

const API = environment.ApiUrl;
const context = '/healthy-company-scheduler/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  salvarRegistro(registro: Usuario) {
    return this.http.post<Usuario>(API + context + 'usuario/add', registro);
  }

  getAll() {
    return this.http.get<Usuario[]>(API + context + 'usuario/all');
  }

  getById(usuarioId: number) {
    return this.http.get<Usuario>(API + context + 'usuario/id/' + usuarioId);
  }

  removeById(usuarioId: number) {
    return this.http.delete<Usuario[]>(
      API + context + 'usuario/remove/' + usuarioId
    );
  }
}

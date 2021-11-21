import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Area } from './area.interface';

const API = environment.ApiUrl;
const context = '/';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  constructor(private http: HttpClient) {}

  salvarRegistro(registro: Area) {
    return this.http.post<Area>(API + context + 'area/add', registro);
  }

  getAll() {
    return this.http.get<Area[]>(API + context + 'area/all');
  }

  getById(usuarioId: number) {
    return this.http.get<Area>(API + context + 'area/id/' + usuarioId);
  }

  removeById(usuarioId: number) {
    return this.http.delete<Area[]>(API + context + 'area/remove/' + usuarioId);
  }
}

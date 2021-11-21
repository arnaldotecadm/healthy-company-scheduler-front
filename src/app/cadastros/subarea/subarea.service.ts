import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { SubArea } from './subarea.interface';

const API = environment.ApiUrl;
const context = '/';

@Injectable({
  providedIn: 'root',
})
export class SubAreaService {
  constructor(private http: HttpClient) {}

  salvarRegistro(registro: SubArea) {
    return this.http.post<SubArea>(API + context + 'sub_area/add', registro);
  }

  getAll() {
    return this.http.get<SubArea[]>(API + context + 'sub_area/all');
  }

  getById(id: number) {
    return this.http.get<SubArea>(API + context + 'sub_area/id/' + id);
  }

  removeById(id: number) {
    return this.http.delete<SubArea[]>(API + context + 'sub_area/remove/' + id);
  }
}

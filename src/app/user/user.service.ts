import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './user.interface';
import { environment } from '../../environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  salvarRegistro(registro : Usuario){
    return this.http.post<Usuario>(API + '/user-management/add', registro);
  }

  addSoftware(usuarioId : string, softwareId : string){
    return this.http.post<Usuario>(API + '/user-management/add-software', {usuarioId, softwareId});
  }

  removeSoftware(usuarioId : string, softwareId : string){
    return this.http.post<Usuario>(API + '/user-management/remove-software', {usuarioId, softwareId});
  }

  getAll(){
    return this.http.get<Usuario[]>(API + '/user-management/all');
  }

  getById(usuarioId : number){
    return this.http.get<Usuario>(API + '/user-management/id/' + usuarioId);
  }

  removeById(usuarioId : number){
    return this.http.delete<Usuario[]>(API + '/user-management/remove/' + usuarioId);
  }
}

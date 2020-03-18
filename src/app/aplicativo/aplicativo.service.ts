import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Software } from './software/software.interface';
import { environment } from '../../environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class AplicativoService {
  

  constructor(private http: HttpClient) { }

  salvarRegistro(registro : Software){
    return this.http.post<Software>(API + '/user-management/software/add', registro);
  }

  getAll(){
    return this.http.get<Software[]>(API + '/user-management/software/all');
  }

  getById(softwareId : number){
    return this.http.get<Software>(API + '/user-management/software/id/' + softwareId);
  }

  removeById(softwareId : number){
    return this.http.delete<Software[]>(API + '/user-management/software/remove/' + softwareId);
  }
}

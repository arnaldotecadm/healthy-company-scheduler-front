import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { RegrasAgendamentoInterface } from './regras-agendamento.interface';

const API = environment.ApiUrl;
const context = '/healthy-company-scheduler/';

@Injectable({
  providedIn: 'root',
})
export class RegrasAgendamentoService {
  constructor(private http: HttpClient) {}

  salvarRegistro(registro: RegrasAgendamentoInterface) {
    return this.http.post<RegrasAgendamentoInterface>(
      API + context + 'regra_agendamento/add',
      registro
    );
  }

  getAll() {
    return this.http.get<RegrasAgendamentoInterface[]>(
      API + context + 'regra_agendamento/all'
    );
  }

  getFirst() {
    return this.http.get<RegrasAgendamentoInterface>(
      API + context + 'regra_agendamento/get_first'
    );
  }

  getById(usuarioId: number) {
    return this.http.get<RegrasAgendamentoInterface>(
      API + context + 'regra_agendamento/id/' + usuarioId
    );
  }

  removeById(usuarioId: number) {
    return this.http.delete<RegrasAgendamentoInterface[]>(
      API + context + 'regra_agendamento/remove/' + usuarioId
    );
  }
}

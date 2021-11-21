import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AgendamentoInterface } from './agendamento.interface';
import * as moment from 'moment';

const API = environment.ApiUrl;
const context = '/healthy-company-scheduler/';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  constructor(private http: HttpClient) {}

  salvarRegistro(registro: AgendamentoInterface) {
    return this.http.post<AgendamentoInterface>(
      API + context + 'agendamento/add',
      registro
    );
  }

  getAll() {
    return this.http.get<AgendamentoInterface[]>(
      API + context + 'agendamento/allDTO'
    );
  }

  getById(id: number) {
    return this.http.get<AgendamentoInterface>(
      API + context + 'agendamento/id/' + id
    );
  }

  getByIdentificacaoAgendamento(idUsuario: number, dataSelecionada: Date) {
    return this.http.get<AgendamentoInterface>(
      API +
        context +
        'agendamento/identificacao_agendamento/' +
        idUsuario +
        '/' +
        moment(dataSelecionada).format('yyyy-MM-D')
    );
  }

  removeById(id: number) {
    return this.http.delete<AgendamentoInterface[]>(
      API + context + 'agendamento/remove/' + id
    );
  }
}

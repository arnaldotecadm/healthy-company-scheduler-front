import { Local } from 'app/cadastros/local/local.interface';
import { Area } from 'app/cadastros/area/area.interface';
import { SubArea } from 'app/cadastros/subarea/subarea.interface';

export interface ModalAgendamentoInterface {
  id: number;
  idFuncionario: number;
  nomeFuncionario: string;
  dataSelecionada: Date;
  locais: Local[];
  areas: Area[];
  subAreas: SubArea[];
}

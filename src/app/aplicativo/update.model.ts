import { UpdateDetailModel } from './update-detail.model';

export class UpdateModel {
  id: number;
  nome: string;
  descricao: string;
  dataAtualizacao: Date;
  notaAtualizacao: string;
  softwarePublicKey: string;
  updateDetailList: UpdateDetailModel[];
}

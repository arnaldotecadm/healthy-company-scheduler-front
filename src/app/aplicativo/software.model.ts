import { UpdateModel } from './update.model';

export class SoftwareModel {
  id: number;
  name: string;
  nickname: string;
  publicKey: string;
  privateKey: string;
  urlUserManual: string;
  emailContact: string;
  mobileVersion: boolean;
  active: boolean;
  inMaintenance: boolean;
  consideration: string;
  updateList: UpdateModel[];
}

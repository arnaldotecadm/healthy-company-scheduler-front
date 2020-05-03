import { SoftwareModel } from 'app/aplicativo/software.model';

export interface Usuario {
  id: number;
  company: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  consideration: string;

  softwaresList: SoftwareModel[];
}

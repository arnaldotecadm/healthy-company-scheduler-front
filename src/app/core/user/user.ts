export interface User {
  id: number;
  name: string;
  email: string;
  superUser: boolean;
  authority_list: any[];
}

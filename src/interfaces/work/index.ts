import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface WorkInterface {
  id?: string;
  content: string;
  user_id?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface WorkGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  company_id?: string;
}

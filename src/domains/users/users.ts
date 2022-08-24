import { Base } from '../../base/Base';

export interface Users extends Base {
  username: string;
  password: string;
  roles: string[];
}

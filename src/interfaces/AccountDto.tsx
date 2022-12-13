import {Movement} from './Movement';

export interface AccountDto {
  id: string;
  cliId: string;
  balance: number;
  credit: number;
  movements: Movement[];
}

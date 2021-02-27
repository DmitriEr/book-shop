import { Enum } from '../booksData';

export interface BookInterface {
  name: string;
  description: string;
  price: number;
  category: Enum;
  createDate: number;
  count: number;
  isAvailable: boolean;
}

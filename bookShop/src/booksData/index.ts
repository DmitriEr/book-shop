import { BookInterface } from '../interface';

export enum Enum {
  Action = 'Action',
  History = 'History',
  Study = 'Study',
  Drama = 'Drama',
  Thriller = 'Thriller',
}

export enum Options {
  name = 'Книга',
  description = 'Описание',
  price = 'Цена',
  category = 'Жанр',
  createDate = 'Дата выпуска',
  count = 'В наличии',
  isAvailable = 'Наличие',
}

export const books: BookInterface[] = [
  {
    name: 'Mastering ArcGIS Server Development with JavaScript',
    description: 'Transform maps and raw data into full-fleged web mapping applications using the power of the ArcGIS JavaScript API and Javascript librities',
    price: 4910,
    category: Enum.Study,
    createDate: 2015,
    count: 3,
    isAvailable: true,
  },
  {
    name: 'Sencha Touch 2 Mobile JavaScript Framework',
    description: 'Get started with Sencha Touch and build awesome, native-quality mobile web applications',
    price: 5540,
    category: Enum.Study,
    createDate: 2013,
    count: 0,
    isAvailable: false,
  },
  {
    name: 'Object-Oriented JavaScript',
    description: 'Learn everything you need to know about OOJS in this comprehensive guide',
    price: 5480,
    category: Enum.Study,
    createDate: 2013,
    count: 1,
    isAvailable: true,
  },
];

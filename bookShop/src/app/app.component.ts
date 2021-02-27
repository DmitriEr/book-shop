import { Component } from '@angular/core';
import { BookInterface } from '../interface';
import { books } from '../booksData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books: BookInterface[] = books;
  title = 'Book-Shop';


  constructor() {}
}

import { Component, OnInit, Input } from '@angular/core';
import { BookInterface } from '../../interface';
import { Options } from '../../booksData';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  objectEntries = Object.entries;
  translate: any = Options;

  @Input() book: any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.book);
    // console.log(this.translate);
  }

  handlerBook(book: BookInterface): void {
    book.count -= 1;
    if (book.count === 0) {
      book.isAvailable = false;
    }
    console.log(book);
  }
}

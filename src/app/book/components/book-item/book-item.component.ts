import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
  @Input() book: Book;

  constructor() {
    this.book = {} as Book;
  }

   editBook(id: number): void {
    console.log(`Editing book: ${id}`)
  }

  deleteBook(id: number): void {
    console.log(`Deleting book: ${id}`)
  }
}

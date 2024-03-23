import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [
    {
      id: 1,
      name: 'Noli Me Tangere',
      authors: ['Jose P. Rizal'],
      isbn: '9715691870'
    },
    {
      id: 2,
      name: 'Banaag at Sikat',
      authors: ['Lope K. Santos'],
      isbn: '9789814914055'
    },
    {
      id: 3,
      name: 'Mga Ibong Mandaragit',
      authors: ['Amado V. Hernandez'],
      isbn: '9718970088'
    }
  ]

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  editBook(id: number): void {
    console.log(`Editing book: ${id}`)
  }

  deleteBook(id: number): void {
    console.log(`Deleting book: ${id}`)
  }
}

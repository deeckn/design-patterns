import { Book } from './Book.js'
import { BookFactory } from './BookFactory.js'
import { BookType } from './BookType.js'

export class BookStore {
    private books: Book[] = []

    public storeBook(
        name: string,
        price: number,
        type: string,
        distributer: string
    ) {
        const bookType = BookFactory.getBookType(type, distributer)
        this.books.push(new Book(name, price, bookType as BookType))
    }

    public displayBooks(page: number) {
        const booksPerPage = 10
        const start = page * booksPerPage
        const end = start + booksPerPage
        this.books.slice(start, end).forEach((book) => book.print())
    }
}

import { BookStore } from './BookStore.js'

const BOOK_TYPES = 3
const BOOKS_TO_STORE = 1000
const PAGE = 5

export function main() {
    const bookStore = new BookStore()
    for (let i = 0; i < BOOKS_TO_STORE / BOOK_TYPES; i++) {
        bookStore.storeBook(
            getRandomBookName(),
            getRandomBookPrice(),
            'action',
            'Amazon'
        )
        bookStore.storeBook(
            getRandomBookName(),
            getRandomBookPrice(),
            'fantasy',
            'Not Amazon'
        )
    }
    bookStore.displayBooks(PAGE)
}

function getRandomBookName() {
    const bookNames = [
        "The Hitchhiker's Guide to the Galaxy",
        'The Restaurant at the End of the Universe',
        'Life, the Universe and Everything',
        'So Long, and Thanks for All the Fish',
        'Mostly Harmless',
        'And Another Thing...',
    ]
    return bookNames[Math.floor(Math.random() * bookNames.length)]
}

function getRandomBookPrice() {
    return Math.floor(Math.random() * 100)
}

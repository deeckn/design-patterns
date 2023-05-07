import { BookType } from './BookType.js'

export class BookFactory {
    private static bookTypes: Map<string, BookType> = new Map<
        string,
        BookType
    >()

    public static getBookType(type: string, distributer: string) {
        if (this.bookTypes.has(type)) {
            return this.bookTypes.get(type)
        }
        return this.bookTypes
            .set(type, new BookType(type, distributer))
            .get(type)
    }
}

import { BookType } from './BookType.js'

export class Book {
    private name: string
    private price: number
    private type: BookType

    constructor(name: string, price: number, type: BookType) {
        this.name = name
        this.price = price
        this.type = type
    }

    public print() {
        console.log(
            `Name: ${this.name}, Price: ${
                this.price
            }, Type: ${this.type.getType()}, Distributer: ${this.type.getDistributer()}`
        )
    }
}

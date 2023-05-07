import { Product } from './Product.js'

export class Book extends Product {
    public constructor(title: string, price: number) {
        super(title, price)
    }

    public calculatePrice(): number {
        return this.price
    }
}

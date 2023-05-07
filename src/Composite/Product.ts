import { Box } from './Box.js'

export abstract class Product implements Box {
    protected title: string
    protected price: number

    public constructor(title: string, price: number) {
        this.title = title
        this.price = price
    }

    abstract calculatePrice(): number
}

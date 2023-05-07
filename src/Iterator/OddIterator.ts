import { Iterator } from './Iterator.js'

export class OddIterator implements Iterator<number> {
    private collection: number[]
    private position: number = 1

    constructor(collection: number[]) {
        this.collection = collection
    }

    public current() {
        return this.collection.at(this.position)
    }

    public next() {
        const item = this.collection.at(this.position)
        this.position += 2
        return item
    }

    public key() {
        return this.position
    }

    public valid() {
        return this.position < this.collection.length
    }
}

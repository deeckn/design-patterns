import { Iterator } from './Iterator.js'

export class EvenIterator implements Iterator<number> {
    private collection: number[]
    private position: number = 0

    constructor(collection: number[]) {
        this.collection = collection
    }

    public current() {
        return this.collection.at(this.position)
    }

    public next() {
        this.position += 2
        return this.collection.at(this.position)
    }

    public key() {
        return this.position
    }

    public valid() {
        return this.position < this.collection.length
    }
}

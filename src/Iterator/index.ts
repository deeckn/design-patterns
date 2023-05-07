import { EvenIterator } from './EvenIterator.js'
import { OddIterator } from './OddIterator.js'

export function main() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    console.log('Odd indexed items:')
    const oddIterator = new OddIterator(numbers)
    while (oddIterator.valid()) {
        console.log(oddIterator.next())
    }

    console.log('Even indexed items:')
    const evenIterator = new EvenIterator(numbers)
    while (evenIterator.valid()) {
        console.log(evenIterator.next())
    }
}

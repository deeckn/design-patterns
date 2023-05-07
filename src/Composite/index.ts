import { Book } from './Book.js'
import { Box } from './Box.js'
import { CompositeBox } from './CompositeBox.js'
import { DeliveryService } from './DeliveryService.js'
import { VideoGame } from './VideoGame.js'

export function main() {
    const bookBox: Box = new CompositeBox([
        new Book('The Lord of the Rings', 50),
        new Book('The Hobbit', 30),
    ])

    const videoGameBox: Box = new CompositeBox([
        new VideoGame('The Witcher 3', 100),
        new VideoGame('The Witcher 2', 80),
    ])

    const orderedProducts: Box[] = [bookBox, videoGameBox]

    const service = new DeliveryService()
    service.setupOrder(orderedProducts)
    console.log(service.calculateOrderPrice())
}

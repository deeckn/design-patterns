import { Box } from './Box.js'
import { CompositeBox } from './CompositeBox.js'

export class DeliveryService {
    private box: Box

    public constructor() {
        this.box = new CompositeBox([])
    }

    public setupOrder(boxes: Box[]) {
        this.box = new CompositeBox(boxes)
    }

    public calculateOrderPrice() {
        return this.box?.calculatePrice()
    }
}

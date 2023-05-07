import { Box } from './Box.js'

export class CompositeBox implements Box {
    private boxes: Box[] = []

    public constructor(boxes: Box[]) {
        this.boxes = boxes
    }

    public addBox(box: Box) {
        this.boxes.push(box)
    }

    public calculatePrice(): number {
        return this.boxes.reduce((acc, box) => acc + box.calculatePrice(), 0)
    }
}

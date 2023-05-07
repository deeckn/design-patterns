import { Car } from './Car.js'
import { CarVariant } from './CarVariant.js'

export class CarFactory {
    public static create(type: CarVariant) {
        switch (type) {
            case CarVariant.RED_MAZDA:
                return new Car('Mazda', 'red', 240)
            case CarVariant.BLUE_MAZDA:
                return new Car('Mazda', 'blue', 200)
            case CarVariant.RED_TOYOTA:
                return new Car('Toyota', 'red', 180)
            case CarVariant.GREY_TOYOTA:
                return new Car('Toyota', 'grey', 220)
            default:
                throw new Error('Invalid car variant')
        }
    }
}

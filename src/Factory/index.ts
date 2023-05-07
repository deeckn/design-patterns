import { CarFactory } from './CarFactory.js'
import { CarVariant } from './CarVariant.js'

export function main() {
    console.log('Factory Pattern Example')

    const redMazda = CarFactory.create(CarVariant.RED_MAZDA)
    const blueMazda = CarFactory.create(CarVariant.BLUE_MAZDA)
    const redToyota = CarFactory.create(CarVariant.RED_TOYOTA)
    const greyToyota = CarFactory.create(CarVariant.GREY_TOYOTA)

    redMazda.showInfo()
    blueMazda.showInfo()
    redToyota.showInfo()
    greyToyota.showInfo()
}

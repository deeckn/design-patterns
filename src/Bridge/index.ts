import { AmericanRestaurant } from './AmericanRestaurant.js'
import { ItalianRestaurant } from './ItalianRestaurant.js'
import { PepperoniPizza } from './PepperoniPizza.js'
import { VeggiePizza } from './VeggiePizza.js'

export function main() {
    const italianRestaurant = new ItalianRestaurant(new PepperoniPizza())
    italianRestaurant.deliverPizza()

    const americanRestaurant = new AmericanRestaurant(new VeggiePizza())
    americanRestaurant.deliverPizza()
}

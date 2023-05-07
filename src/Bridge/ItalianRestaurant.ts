import { Pizza } from './Pizza.js'
import { Restaurant } from './Restaurant.js'

export class ItalianRestaurant extends Restaurant {
    public constructor(pizza: Pizza) {
        super(pizza)
    }

    public addSauce() {
        this.pizza.setSauce('Oil')
    }

    public addToppings() {}

    public makeCrust() {
        this.pizza.setCrust('Thin')
    }
}

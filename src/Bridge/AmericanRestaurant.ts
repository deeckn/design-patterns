import { Pizza } from './Pizza.js'
import { Restaurant } from './Restaurant.js'

export class AmericanRestaurant extends Restaurant {
    public constructor(pizza: Pizza) {
        super(pizza)
    }

    public addSauce() {
        this.pizza.setSauce('Super Secret Sauce')
    }

    public addToppings() {
        this.pizza.setToppings('Eveything')
    }

    public makeCrust() {
        this.pizza.setCrust('Thick')
    }
}

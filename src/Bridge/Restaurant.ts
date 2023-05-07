import { Pizza } from './Pizza.js'

export abstract class Restaurant {
    protected pizza: Pizza

    protected constructor(pizza: Pizza) {
        this.pizza = pizza
    }

    abstract addSauce(): void
    abstract addToppings(): void
    abstract makeCrust(): void

    public setPizza(pizza: Pizza) {
        this.pizza = pizza
    }

    public deliverPizza() {
        this.makeCrust()
        this.addSauce()
        this.addToppings()
        this.pizza.assemble()
        this.pizza.qualityCheck()
    }
}

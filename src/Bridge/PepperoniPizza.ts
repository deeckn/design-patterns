import { Pizza } from './Pizza.js'

export class PepperoniPizza extends Pizza {
    public assemble() {
        if (this.sauce === undefined) {
            console.log('No sauce')
        } else {
            console.log(`Adding sauce ${this.sauce}`)
        }

        if (this.toppings === undefined) {
            console.log('No toppings')
        } else {
            console.log(`Adding toppings ${this.toppings}`)
        }

        console.log('Adding pepperoni')
    }
    public qualityCheck() {
        console.log(`Crust is ${this.crust}`)
    }
}

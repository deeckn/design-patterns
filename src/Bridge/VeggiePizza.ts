import { Pizza } from './Pizza.js'

export class VeggiePizza extends Pizza {
    public assemble() {
        console.log(`Adding sauce ${this.sauce}`)
        console.log(`Adding toppings ${this.toppings}`)
        console.log('Adding cheese')
    }
    public qualityCheck() {
        console.log(`Crust is ${this.crust}`)
    }
}

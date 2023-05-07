export abstract class Pizza {
    protected sauce: string | undefined
    protected toppings: string | undefined
    protected crust: string | undefined

    public abstract assemble(): void
    public abstract qualityCheck(): void

    public setSauce(sauce: string) {
        this.sauce = sauce
    }

    public setToppings(toppings: string) {
        this.toppings = toppings
    }

    public setCrust(crust: string) {
        this.crust = crust
    }
}

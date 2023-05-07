import { Phone } from './Phone.js'

export abstract class State {
    protected phone: Phone

    public constructor(phone: Phone) {
        this.phone = phone
    }

    public abstract onHome(): void
    public abstract onPhoneLock(): void
}

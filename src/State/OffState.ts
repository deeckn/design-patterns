import { LockedState } from './LockedState.js'
import { Phone } from './Phone.js'
import { State } from './State.js'

export class OffState extends State {
    public constructor(phone: Phone) {
        super(phone)
    }

    public onHome(): void {
        this.phone.setState(new LockedState(this.phone))
        this.phone.turnOn()
    }

    public onPhoneLock(): void {
        this.phone.setState(new LockedState(this.phone))
        this.phone.turnOn()
    }
}

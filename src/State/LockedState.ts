import { OffState } from './OffState.js'
import { Phone } from './Phone.js'
import { ReadyState } from './ReadyState.js'
import { State } from './State.js'

export class LockedState extends State {
    public constructor(phone: Phone) {
        super(phone)
    }

    public onHome(): void {
        this.phone.setState(new ReadyState(this.phone))
        this.phone.unlock()
    }

    public onPhoneLock(): void {
        this.phone.setState(new OffState(this.phone))
        this.phone.lock()
    }
}

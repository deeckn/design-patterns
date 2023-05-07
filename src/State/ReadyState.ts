import { OffState } from './OffState.js'
import { Phone } from './Phone.js'
import { State } from './State.js'

export class ReadyState extends State {
    public constructor(phone: Phone) {
        super(phone)
    }

    public onHome(): void {
        this.phone.home()
    }

    public onPhoneLock(): void {
        this.phone.setState(new OffState(this.phone))
        this.phone.lock()
    }
}

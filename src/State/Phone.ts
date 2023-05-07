import { OffState } from './OffState.js'
import { State } from './State.js'

export class Phone {
    private state: State

    public constructor() {
        this.state = new OffState(this)
    }

    public lock() {
        console.log('Locking phone and turning off screen...')
    }

    public unlock() {
        console.log('Unlocking the phone to home...')
    }

    public home() {
        console.log('Going to home screen...')
    }

    public turnOn() {
        console.log('Turning on the phone...')
    }

    public setState(state: State) {
        this.state = state
    }

    public onHome(): void {
        this.state.onHome()
    }

    public onPhoneLock(): void {
        this.state.onPhoneLock()
    }
}

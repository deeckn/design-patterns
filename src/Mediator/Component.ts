import { Mediator } from './Mediator.js'

export abstract class Component {
    protected mediator: Mediator

    public constructor(mediator?: Mediator) {
        this.mediator = mediator!
    }

    public setMediator(mediator: Mediator) {
        this.mediator = mediator
    }

    public abstract click(): void
    public abstract keypress(key: string): void
}

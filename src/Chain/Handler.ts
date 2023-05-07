import { Email } from './Email.js'

export abstract class Handler {
    private successor: Handler

    public constructor(successor?: Handler) {
        this.successor = successor!
    }

    public setSuccessor(successor: Handler) {
        this.successor = successor
    }

    public abstract handle(email: Email): void

    protected next(email: Email) {
        if (this.successor) {
            this.successor.handle(email)
        }
    }
}

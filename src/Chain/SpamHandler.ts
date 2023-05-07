import { Email } from './Email.js'
import { EmailType } from './EmailType.js'
import { Handler } from './Handler.js'

export class SpamHandler extends Handler {
    public handle(email: Email): void {
        if (email.getType() === EmailType.SPAM) {
            console.log('Email is spam, deleting it...')
            return
        }
        this.next(email)
    }
}

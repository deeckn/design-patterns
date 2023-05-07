import { Email } from './Email.js'
import { EmailType } from './EmailType.js'
import { Handler } from './Handler.js'

export class NewLocationHandler extends Handler {
    public handle(email: Email): void {
        if (email.getType() === EmailType.NEW_LOCATION) {
            console.log(`New location | Content: ${email.getContent()}`)
            return
        }
        this.next(email)
    }
}

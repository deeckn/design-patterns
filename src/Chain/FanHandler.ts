import { Email } from './Email.js'
import { EmailType } from './EmailType.js'
import { Handler } from './Handler.js'

export class FanHandler extends Handler {
    public handle(email: Email): void {
        if (email.getType() === EmailType.FAN) {
            console.log(`Fan mail | Content: ${email.getContent()}`)
            return
        }
        this.next(email)
    }
}

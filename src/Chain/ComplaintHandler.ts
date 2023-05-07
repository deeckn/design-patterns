import { Email } from './Email.js'
import { EmailType } from './EmailType.js'
import { Handler } from './Handler.js'

export class ComplaintHandler extends Handler {
    public handle(email: Email): void {
        if (email.getType() === EmailType.COMPLAINT) {
            console.log(`A complaint! | Content: ${email.getContent()}`)
            return
        }
        this.next(email)
    }
}

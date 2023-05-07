import { Email } from './Email.js'
import { Handler } from './Handler.js'

export class EmailService {
    private emailHandler: Handler

    public constructor(emailHandler: Handler) {
        this.emailHandler = emailHandler
    }

    public processEmails(email: Email[]) {
        email.forEach((email) => {
            this.emailHandler.handle(email)
        })
    }
}

import { ComplaintHandler } from './ComplaintHandler.js'
import { Email } from './Email.js'
import { EmailService } from './EmailService.js'
import { EmailType } from './EmailType.js'
import { FanHandler } from './FanHandler.js'
import { NewLocationHandler } from './NewLocationHandler.js'
import { SpamHandler } from './SpamHandler.js'

export function main() {
    const emails: Email[] = [
        new Email(EmailType.SPAM, 'Buy cheap mobile phones'),
        new Email(EmailType.FAN, 'Hi there, I love your videos'),
        new Email(EmailType.COMPLAINT, 'Your merchandise is fake'),
        new Email(EmailType.NEW_LOCATION, 'New login from New York'),
        new Email(EmailType.SPAM, 'Buy cheap mobile phones'),
    ]

    const handler = new SpamHandler(
        new FanHandler(new ComplaintHandler(new NewLocationHandler()))
    )

    const service = new EmailService(handler)
    service.processEmails(emails)
}

import { EmailType } from './EmailType.js'

export class Email {
    private type: EmailType
    private content: string

    constructor(type: EmailType, content: string) {
        this.type = type
        this.content = content
    }

    public getType() {
        return this.type
    }

    public getContent() {
        return this.content
    }
}

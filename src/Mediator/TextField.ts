import { Component } from './Component.js'
import { Mediator } from './Mediator.js'

export class TextField extends Component {
    private text: string

    public constructor(mediator?: Mediator) {
        super(mediator)
        this.text = ''
    }

    public click() {}

    public keypress(key: string) {
        this.text = this.text + key
        this.mediator.notify(this, 'keypress')
    }

    public getText() {
        return this.text
    }
}

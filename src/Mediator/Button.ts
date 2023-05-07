import { Component } from './Component.js'

export class Button extends Component {
    public click() {
        this.mediator.notify(this, 'click')
    }

    public keypress() {}
}

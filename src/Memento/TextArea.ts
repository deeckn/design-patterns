import { Memento } from './Memento.js'
import { TextAreaMemento } from './TextAreaMemento.js'

export class TextArea {
    private text: string = ''

    public set(text: string) {
        this.text = text
    }

    public restore(memento: Memento) {
        this.text = memento.getText()
    }

    public getText() {
        return this.text
    }

    public takeSnapshot() {
        return new TextAreaMemento(this.text)
    }
}

import { Memento } from './Memento.js'

export class TextAreaMemento implements Memento {
    private text: string

    public constructor(text: string) {
        this.text = text
    }

    public getText() {
        return this.text
    }
}

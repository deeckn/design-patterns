import { Memento } from './Memento.js'
import { TextArea } from './TextArea.js'

export class TextEditor {
    private textArea
    private stateHistory: Memento[]

    public constructor() {
        this.textArea = new TextArea()
        this.stateHistory = []
    }

    public write(text: string) {
        const currentText = this.textArea.getText()
        this.textArea.set(currentText + text)
    }

    public undo() {
        const memento = this.stateHistory.pop()
        if (!memento) {
            console.log('Nothing to undo')
            return
        }
        this.textArea.restore(memento)
    }

    public save() {
        const memento = this.textArea.takeSnapshot()
        this.stateHistory.push(memento)
    }

    public getText() {
        return this.textArea.getText()
    }
}

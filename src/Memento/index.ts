import { TextEditor } from './TextEditor.js'

export function main() {
    const textEditor = new TextEditor()
    textEditor.write('Line 1\n')
    textEditor.write('Line 2\n')
    textEditor.save()
    textEditor.write('Line 3\n')
    textEditor.write('Line 4\n')
    console.log(textEditor.getText())
    textEditor.undo()
    console.log(textEditor.getText())
}

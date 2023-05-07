import { Button } from './Button.js'
import { SigninMediator } from './SigninMediator.js'
import { TextField } from './TextField.js'

export function main() {
    const usernameInput = new TextField()
    const passwordInput = new TextField()
    const signinButton = new Button()
    new SigninMediator(usernameInput, passwordInput, signinButton)

    usernameInput.keypress('a')
    usernameInput.keypress('d')
    usernameInput.keypress('m')
    usernameInput.keypress('i')
    usernameInput.keypress('n')

    passwordInput.keypress('1')
    passwordInput.keypress('2')
    passwordInput.keypress('3')

    signinButton.click()
}

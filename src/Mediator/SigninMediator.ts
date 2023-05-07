import { Button } from './Button.js'
import { Component } from './Component.js'
import { Mediator } from './Mediator.js'
import { TextField } from './TextField.js'

export class SigninMediator implements Mediator {
    private usernameInput: TextField
    private passwordInput: TextField
    private signinButton: Button
    private isSignedIn: boolean

    public constructor(
        usernameInput: TextField,
        passwordInput: TextField,
        signinButton: Button
    ) {
        this.usernameInput = usernameInput
        this.usernameInput.setMediator(this)
        this.passwordInput = passwordInput
        this.passwordInput.setMediator(this)
        this.signinButton = signinButton
        this.signinButton.setMediator(this)
        this.isSignedIn = false
    }

    public notify(sender: Component, event: string) {
        if (sender instanceof Button && event === 'click') {
            const username = this.usernameInput.getText()
            const password = this.passwordInput.getText()
            console.log(
                `Signin with username: ${username} and password: ${password}`
            )
            if (username === 'admin' && password === '123') {
                this.isSignedIn = true
                console.log('Signin successful')
            }
        }
    }

    public hasUserSession() {
        return this.isSignedIn
    }
}

import { Component } from './Component.js'

export interface Mediator {
    notify(sender: Component, event: string): void
}

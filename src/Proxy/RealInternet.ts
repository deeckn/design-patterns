import { Internet } from './Internet.js'

export class RealInternet implements Internet {
    public connectTo(serverHost: string) {
        console.log(`Connecting to ${serverHost}`)
        console.log(`Connected to ${serverHost}`)
    }
}

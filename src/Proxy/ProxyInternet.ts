import { Internet } from './Internet.js'

export class ProxyInternet implements Internet {
    private internet: Internet
    private bannedSites: string[] = ['banned.com', 'abc.com']

    public constructor(internet: Internet) {
        this.internet = internet
    }

    public connectTo(serverHost: string) {
        if (this.bannedSites.includes(serverHost)) {
            console.log(`Access denied to ${serverHost}`)
            return
        }
        this.internet.connectTo(serverHost)
    }
}

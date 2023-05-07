import { ProxyInternet } from './ProxyInternet.js'
import { RealInternet } from './RealInternet.js'

export function main() {
    const internet = new RealInternet()
    const proxy = new ProxyInternet(internet)
    proxy.connectTo('google.com')
    proxy.connectTo('banned.com')
    proxy.connectTo('abc.com')
}

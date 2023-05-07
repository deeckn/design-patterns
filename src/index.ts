import { main as bridge } from './Bridge/index.js'
import { main as chain } from './Chain/index.js'
import { main as composite } from './Composite/index.js'
import { main as factory } from './Factory/index.js'
import { main as flyweight } from './Flyweight/index.js'
import { main as iterator } from './Iterator/index.js'
import { main as mediator } from './Mediator/index.js'
import { main as memento } from './Memento/index.js'
import { main as proxy } from './Proxy/index.js'
import { main as state } from './State/index.js'

enum DesignPattern {
    FACTORY = 'factory',
    MEMENTO = 'memento',
    STATE = 'state',
    ITERATOR = 'iterator',
    COMPOSITE = 'composite',
    BRIDGE = 'bridge',
    MEDIATOR = 'mediator',
    PROXY = 'proxy',
    CHAIN_OF_RESPONSIBILITY = 'chain',
    FLYWEIGHT = 'flyweight',
}

const example: DesignPattern = DesignPattern.FLYWEIGHT

function main(example: DesignPattern) {
    switch (example) {
        case DesignPattern.FACTORY:
            factory()
            break
        case DesignPattern.MEMENTO:
            memento()
            break
        case DesignPattern.STATE:
            state()
            break
        case DesignPattern.ITERATOR:
            iterator()
            break
        case DesignPattern.COMPOSITE:
            composite()
            break
        case DesignPattern.BRIDGE:
            bridge()
            break
        case DesignPattern.MEDIATOR:
            mediator()
            break
        case DesignPattern.PROXY:
            proxy()
            break
        case DesignPattern.CHAIN_OF_RESPONSIBILITY:
            chain()
            break
        case DesignPattern.FLYWEIGHT:
            flyweight()
            break
        default:
            throw new Error('Invalid design pattern')
    }
}

main(example)

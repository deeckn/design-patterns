# Design Patterns
A repository of common design patterns written in Typescript.

Credits:
- https://refactoring.guru/design-patterns
- https://youtube.com/@geekific

## Getting Started
Node and Yarn is required.
1. `yarn install` to install dependencies
2. (Optional) Install Prettier VSCode extension, if you want to play around while keeping code consistency

## Viewing Examples
Choose a design pattern by changing the enum in the `example` variable in `src/index.ts`.
```
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
```
1. `yarn build` to transpile Typescript to Javascript
2. `yarn start` to run the script
3. (Optional) `yarn dev` to run a nodemon development server

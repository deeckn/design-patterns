export interface Iterator<T> {
    current(): T | undefined
    next(): T | undefined
    key(): number
    valid(): boolean
}

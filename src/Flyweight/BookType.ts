export class BookType {
    private type: string
    private distributer: string

    constructor(type: string, distributer: string) {
        this.type = type
        this.distributer = distributer
    }

    public getType() {
        return this.type
    }

    public getDistributer() {
        return this.distributer
    }
}

export class Car {
    private name: string
    private color: string
    private speed: number

    constructor(name: string, color: string, speed: number) {
        this.name = name
        this.color = color
        this.speed = speed
    }

    public showInfo() {
        console.log("Car's info: ")
        console.log(
            `Name: ${this.name} | Color: ${this.color} | Speed: ${this.speed}`
        )
    }
}

import Guitar from './guitar'
export default class Inventory {
    constructor() {
        this.guitars = []
    }

    addGuitar(serialNumber, price, builder, model, type, backWood, typeWood) {
        let guitar = new Guitar(serialNumber, price, builder, model, type, backWood, typeWood)
        this.guitars.push(guitar)
    }

    getGuitar(serialNumber) {
        let collectionOfGuitars = this.guitars
        for (let guitar of collectionOfGuitars) {
            if (guitar.serialNumber === serialNumber)
                return guitar
        }

        return null;
    }
}
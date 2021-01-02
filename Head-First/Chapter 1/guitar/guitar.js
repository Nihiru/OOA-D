export default class Guitar {
    constructor(serialNumber, price, builder, model, type, backWood, typeWood) {
        this.serialNumber = serialNumber
        this.price = price
        this.builder = builder
        this.model = model
        this.type = type
        this.backWood = backWood
        this.typeWood = typeWood
    }

    serialNumber() {
        return this.serialNumber
    }

    price() {
        return this.price
    }

    builder() {
        return this.builder
    }

    model() {
        return this.model
    }

    type() {
        return this.type
    }

    backWood() {
        return this.backWood
    }

    typeWood() {
        return this.typeWood
    }
}
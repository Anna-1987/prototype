class Car{ 
    static description = 'класс описывает автомобиль';// так объявляются все статические свойства в классах

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    }


    constructor({ brand, model, price } = {}) {

        this._model = model;
        this.price = price; 
        this.brand = brand; 


    }

    changePrice(newPrice) {
        this.price = newPrice;

    }
    updateModel(newModel) {
        this.model = newModel;
    }

    get model() {
        return this._model 
    }

    set model(newModel) {
        this._model = newModel;
    }

    // setModel(newModel) {
    //     this.model = newModel;
    // }

    // getModel() {
    //     return this.model;
    // }
};

const carInstance = new Car({
    brand: 'Audi',
    model: 'Q3',
    price:'35000'
});

carInstance.changePrice(7000);
// carInstance.updateModel('Q8');

// Car.logInfo(carInstance);
// console.log(carInstance);

 console.log(carInstance.model);
// console.log(carInstance.getModel());

carInstance.model = 'Q7';
// carInstance.setModel('Q7');

console.log(carInstance.model);
// console.log(carInstance.getModel());


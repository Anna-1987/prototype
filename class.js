// Классы
//     - объявление
//     - конструктор
//     - методы
//     - Static
//     - приватные свойства
//     - синтаксис публичных свойств и методов классов
//     - геттеры и сеттеры
     

class Car{ 
    static AAAA = 'AAA';// так объявляются все статические свойства в классах

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    }

    #test = 'test';// так делается приватное свойство
    mySuperPublicField = 5555;// так делаются публичные свойства класса

    constructor({ brand, model, price } = {}) {
        // console.log('выполняется constructor');

        // this.a = 5;
        // this.b = 10;

        this.brand = brand;//публичные свойства класса 
        this.model = model;//публичные свойства класса 
        this.price = price;//публичные свойства класса 


    }

    changePrice(newPrice) {
        this.price = newPrice;

        console.log(this.#test);// приватные свойства можна юзать в методах
    }
    updateModel(newModel) {
        this.model = newModel;
    }
};
console.dir(Car);

const carInstance = new Car({
     brand: 'Audi',
    model: 'Q3',
    price:'35000'
});

carInstance.changePrice(7000);
carInstance.updateModel('Q8');

console.log(Car.AAAA);
Car.logInfo(carInstance);
// console.log(carInstance);
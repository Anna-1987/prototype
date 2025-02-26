// Функции - конструкторы
//     - именованные
//     - оператор new
//     - Свойство Function.prototype

const Car = function ({brand,model,price} = {}) { 
    

    this.brand = brand;
    this.model = model;
    this.price = price;

    this.changePrice = function (newPrice) {
        this.price = newPrice;
    }
};

const myCar = new Car({
    brand: 'Audi',
    model: 'Q3',
    price:'35000'
});
console.log(myCar);

const myCar2 = new Car({
brand: 'Audi',
model: 'A6',
price: 65000,
});
 console.log(myCar2);

const myCar3 = new Car({
    brand: 'BMW',
model: 'x6',
price: 50000,
});
console.log(myCar3);
// 1. Если функция ызывается через new создается пустой обьект
// 2. Функция создается в контексте созданного обьекта, то
//   есть в this записывается ссылка на него
// 3. в свойство this__proto__ записывается ссылка на обьект Car.prototype
//   тоесть Car.prototype это ПРОТОТИП будующего обьекта(экземпляра)
// 4.Ссылка на обьект возвращается в место вызова new Car

// brand: 'Audi'
// model: '03'
// price: 35000


// brand: 'Audi'
// model: 'A6'
// price: 65000


// brand: 'BMW'
// model: 'x6'
// price: 50000


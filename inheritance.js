// Наследование
// - extends
// - super()

class Hero{
    constructor({name = 'hero', xp = 0}={}) {
         this.name = name;
        this.xp = xp;
    }

     gainXp(amount) {
         console.log(`${this.name} получает ${amount} опыта`);
         this.xp += amount;
    }
}

// const mango = new Hero({ name: 'Mango', xp: 1000 });
// console.log(mango);
// mango.gainXp(1000);


// !!!!!!***Для того чтоб класс Warrior наследовал сойства из базавого классас Hero......

class Warrior extends Hero{
    constructor({weapon =''}={}) {
        super();
        this.weapon = weapon;
    }

}

const mango = new Warrior({ name: 'Mango', xp: 1000, weapon:'алебаpда' });

console.log(mango);

mango.gainXp(1000);


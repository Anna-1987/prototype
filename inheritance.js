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
    constructor({ weapon , ...restProps}) {
        super(restProps);
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`)
    }

}

class Berserk extends Warrior{
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);

        this.warcry = warcry;
    }
    babyRage() {
        console.log(this.warcry);
    }
}


class Mage extends Hero{
    constructor({ spells, ...restProps }) {
        super(restProps);

        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} что-то калдует`);
    }
}

const ajax = new Berserk({ name: 'Ajax', xp: 700, weapon: 'exe', warcry: 'waaaaaaah' });
console.log(ajax);
ajax.babyRage();
ajax.attack();
ajax.gainXp(300);
console.log(ajax);

const mango = new Warrior({name: 'Mango', xp: 1000, weapon:'алебаpда'});

// console.log(mango);
// mango.attack();
// mango.gainXp(1000);
// console.log(mango);

const poly = new Mage({name:'Poly',xp: 500,spells: ['феарбол']});

// console.log(poly);
// poly.cast();
// poly.gainXp(2000);
// console.log(poly);


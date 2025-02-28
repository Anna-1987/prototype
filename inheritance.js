// Наследование
// - extends
// - super()

class Hero{
    constructor(name = 'hero', xp = 0) {
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
    constructor(name, xp,weapon) {
        super(name,xp);
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`)
    }

}

class Mage extends Hero{
    constructor(name, xp, spells = []) {
        super(name, xp);

        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} что-то калдует`);
    }
}

const mango = new Warrior( 'Mango',1000, 'алебаpда');

console.log(mango);
mango.attack();
mango.gainXp(1000);
console.log(mango);

const poly = new Mage('Poly', 500, ['феарбол']);

console.log(poly);
poly.cast();
poly.gainXp(2000);
console.log(poly);


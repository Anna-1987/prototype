// Прототип объекта

//     - Object.create()
//     - [[Prototype]]  и   ___proto____
//     - Object.getPrototypeOf()
//     - Собственныe свойства и Object.prototype.hasOwnProperty()
//     - Цепочка прототипов


// const objC = {
//     z: 5,
// };
// console.log('objC', objC);

// const objB = Object.create(objC);
// objB.y = 2;
// console.log('objB', objB);

// // console.log(objB.y);// 2
// // console.log(objB.z);//5

// const objA = Object.create(objB);
// objA.x = 1;
// console.log('objA', objA);

// console.log(objA.z);//5

// objA.z = 1000;
// console.log(objA.z);//1000 создало собственное свойсто objA

// console.log(objC.hasOwnProperty('z'));// проверяет есть ли собственное свойство объекта



// Это собственное свойства объекта
// Это свойство на объекте-прототипе


// Алгоритм поиска свойства в цепочке прототипов

// 1.Поиск начинается с собственных свойства
// 2.Если свойства нет в собственных, поиск переходит к цепочке прототипов
// 3.Поиск прекращается при первом совпадении(есть такое сойство)
// 4.Возвращается значение свойства


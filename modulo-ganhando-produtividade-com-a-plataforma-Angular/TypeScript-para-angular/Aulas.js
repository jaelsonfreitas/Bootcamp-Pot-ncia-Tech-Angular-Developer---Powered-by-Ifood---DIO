"use strict";
/**
 * dentro do type temos duas maneiras de declarar arrays
 */
let dados = ["Felipe", "Ana", "Jaelson"];
let dados2 = ["Felipe", "Ana", "Jaelson"];
let infos = ["Jaelson", 355];
/**
 * Tuplas, aqui precisamos seguir a exata ordem que foi criado
 */
let boleto = ["Conta de água", 199, 9, 3234565];
/**
 * arrays métodos
 * são os mesmos do JavaScript comum.
 */
dados.pop();
/**
 * Datas
 */
let aniversario = new Date("2023-05-04 21:41");
console.log(aniversario.toString());
/**
 * Funçoes - não são diferentes do JS tradicional.
 * devemos sempre tipar nossas funçoes para ele nao pegar de maneira implicita.
 */
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
function calltoPhone(phone) {
    return phone;
}
({
    return: "Jaelson"
});
let soma = addNumber(4, 7);
console.log(addToHello("Felipe"));
console.log(calltoPhone());
/**
 * Mais utilizado quando queremos trabalhar com classe.
 */
const bot1 = {
    id: 1,
    name: "Megamen"
};
const bot2 = {
    id: 1,
    name: "Megamen"
};
console.log(bot1);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        throw new Error("Method not implemented.");
    }
}
/**
 * Classes nada mais é do que uma forma que voçê pode aproveitar formatos.
 */
// se quiser posso passar o name como opcional .
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character(10, 98);
console.log(p1.attack());
/**
Modificadores de acesso.
public - modificador de acesso e publico
private - so pode ser acessada de dentro da classe.
protected - so pode ser enchergado dentro da classe ou da subclasses.

*/
// Subclasses
class Magician extends Character {
    constructor(name, stregth, skill) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
// generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["felipe", "goku"], ["vegeta"]);
numArray.push("Hello");
console.log(numArray);
console.log(stgArray);

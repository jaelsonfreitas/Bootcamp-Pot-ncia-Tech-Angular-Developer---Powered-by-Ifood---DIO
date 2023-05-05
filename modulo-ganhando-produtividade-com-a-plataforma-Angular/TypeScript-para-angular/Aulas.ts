/**
 * dentro do type temos duas maneiras de declarar arrays
 */

let dados: string[] = ["Felipe", "Ana", "Jaelson"];
let dados2: Array<string> = ["Felipe", "Ana", "Jaelson"];

let infos: (string | number)[] = ["Jaelson", 355];

/**
 * Tuplas, aqui precisamos seguir a exata ordem que foi criado
 */

let boleto :[string, number, number] = ["Conta de água", 199,9, 3234565];

/**
 * arrays métodos
 * são os mesmos do JavaScript comum.
 */
dados.pop();

/**
 * Datas
 */
let aniversario: Date = new Date("2023-05-04 21:41");
console.log(aniversario.toString());


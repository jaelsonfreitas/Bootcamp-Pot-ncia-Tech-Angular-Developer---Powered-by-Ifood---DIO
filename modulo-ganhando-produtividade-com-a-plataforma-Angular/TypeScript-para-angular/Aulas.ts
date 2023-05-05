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

/**
 * Funçoes - não são diferentes do JS tradicional.
 * devemos sempre tipar nossas funçoes para ele nao pegar de maneira implicita.
 */

function addNumber(x: number,y:number): number{
    return x + y;
}

function addToHello(name: string) {
    return `Hello ${name}`;
}
function calltoPhone(phone: number | string): any  {
    return phone;
}
/*
 * podemos declarar do tipo number | string ou any - recomenda-se não utilizar o tipo any.
 */

async function getDatabase(id : number): Promise;<string> {
    return "Jaelson";
}
let soma: number = addNumber(4, 7);

console.log(addToHello("Felipe"));
console.log(calltoPhone());

    //interfaces (type x interface)
    type robot = {
       readonly id: number | string;
        name: string;
    };
    /**
     * Mais utilizado para trabalhar com tipos de objetos.
     */

    interface robot2 {
        readonly id: number | string;
        name: string;
    }
/**
 * Mais utilizado quando queremos trabalhar com classe.
 */

const bot1: robot2 = {
    id: 1
    name: "Megamen"
};

    const bot2: robot2 = {
        id: 1
        name: "Megamen"
    };

    console.log(bot1);
    console.log(bot2);
    
    
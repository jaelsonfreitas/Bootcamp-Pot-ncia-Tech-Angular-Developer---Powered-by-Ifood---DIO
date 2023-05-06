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
        sayHello():string;
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
    
    class Pessoa implements robot2{
        id: string | number;
        name: string;

        constructor(id: string | number, name: string ) {
            this.id = id;
            this.name = name;
        }
        sayHello(): string {
            throw new Error("Method not implemented.");
        }
    }

    /**
     * Classes nada mais é do que uma forma que voçê pode aproveitar formatos.
     */
    // se quiser posso passar o name como opcional .

        class Character {
            name: string;
            stregth: number;
            skill: number;

            constructor(name: string, stregth: number, skill:number){
                this.name = name;
                this.stregth = stregth;
                this.skill = skill;
            }

            attack() : void{
                console.log(`Attack with ${this.stregth} points`);
            }
        }

        const p1 = new Character(10,98);
        console.log(p1.attack());
        

        /**
        Modificadores de acesso.
        public - modificador de acesso e publico
        private - so pode ser acessada de dentro da classe.
        protected - so pode ser enchergado dentro da classe ou da subclasses.
        
        */
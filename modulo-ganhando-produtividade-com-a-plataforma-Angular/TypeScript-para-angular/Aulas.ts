//decorators

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __nome: "Felipe"});
    };
}


//atribute decorator
class Api {
    @minLength(3)
    nome: string

    constructor(name:string)
    this.nome = nome;
}        

const api = new Api("produtos");
console.log(api.nome);

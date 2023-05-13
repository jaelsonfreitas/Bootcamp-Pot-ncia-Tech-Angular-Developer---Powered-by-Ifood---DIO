//decorators

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __nome: "Felipe"});
    };
}


//atribute decorator
function minLength(length: number){
    return (target:any, key: string) =>{
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`)
            }else {
                _value = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Api {
    @minLength(3)
    nome: string

    constructor(name:string)
    this.nome = nome;
}        

console.log(api.nome);

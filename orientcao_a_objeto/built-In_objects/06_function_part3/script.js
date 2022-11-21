let a = {
    nome: 'Matheus',
    dizerNome(){
        console.log(`o nome deste objeto é ${this.nome}`)
    }

};

let b = {
    nome: 'João'
};

a.dizerNome();
a.dizerNome.call(b);// Aqui estamos chamando a função do objeto a para ser usado no objeto B 
//Mas ela ainda continua sendo o metodo atribuido ao objeto a

console.log(b)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 8; i >= 0; i -= 2) {
    console.log(numeros[i])
}
   //Acima se encontra a minha resposta para o exercicio 

numeros.push (11)
   
for(let j= numeros.length - 2; j >= 0; j-= 2){
   console.log( numeros[j])
   }

   // Acima esta a resposta do professor,dentre as duas respostas o que muda é o atributo para a variavel, 
   // Sendo que na segunda resposta se for acresentado algo na array ele ira contabilizar e ira mudar a apresentação dos numeros
   // Ao executar o codigo você pode acompanhar a diferença
   

   
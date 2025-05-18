// Erros de arredondamento que acontece devido ao sistema binário
const num1 = 0.1;
const num2 = 0.2;
const resultado = num1 + num2;

console.log(resultado); // Saída: 0.30000000000000004

// escopo de uma variável. Ele determina em qual local do código ela pode ser acessada var é global já let e const é de bloco

/*a. let x = "5" + 2 + 3; resultará em x = "523". A concatenação de uma string com números é sempre tratada como uma concatenação de strings.
b. let x = 2 + 3 + "5"; resultará em x = "55". Neste caso, a adição de dois números será primeiro realizada e, em seguida, a string será concatenada ao resultado.*/

const invariavel = 5;

//A afirmação é falsa. Em JavaScript, os nomes de variáveis diferenciam maiúsculas de minúsculas, significando que nome e NOME são considerados variáveis diferentes. 
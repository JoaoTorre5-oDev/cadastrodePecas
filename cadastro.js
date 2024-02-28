//se a peça possuir um peso superior a 100 gramas, pode cadastrar

let peso = 50;

if(peso < 100) {
console.log("A peça não tem o peso minimo exigido.")
} 
else {
    console.log("A peça está autorizada para cadastro.")
}

//Dada a capacidade de cada caixa, caso a lista de peça seja superior a 10, imprima uma mensagem informada não ter capacidade suficiente.

let listadePecas = ["Amortecedor", "Disco de freio", "cabecote", "disco de embreagem"]

if(listadePecas.length < 10) {
    console.log("é possivel cadastrar mais peças")
}
else{
console.log("Não tem mais espaçona caixa")
}

//Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

let nomePeca = "Motor"

if(nomePeca.length > 3){
    console.log("Nome valido para cadastro")
}
else{
    console.log("Nome iválido para cadastro")
}
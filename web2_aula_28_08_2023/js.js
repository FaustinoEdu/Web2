var posicaoImc = 4;
var posicaoClassificacao = 5;
var posicaoAltura = 2;
var posicaoPeso = 1;

var classificacao = getElementsByTagName[posicaoClassificacao];
var imc = percorrendoTabela[posicaoImc];



var minhaTabela = document.querySelector("table");//Selecioana elementos 
//Percorrendo as tabelas
//var percorrendoTabela = document.getElementsByTagName("td");


// Adicione a nova coluna de cabeçalho
var novaColunaCabecalho = document.createElement("th"); // Criando novo cabeçalho da coluna
novaColunaCabecalho.textContent = "Classificações"; // Informações do cabeçalho
minhaTabela.querySelector("thead tr").appendChild(novaColunaCabecalho);//  selecionando tr de table, appendchilld pega o ultimo 

//Adicione novas colunas de dados à tabela
var linhas = minhaTabela.querySelectorAll("tbody tr");  // Consultando o corpo da tabela
linhas.forEach(function (linha) {//forEach passa uma função de callback

  var novaColunaDados = document.createElement("td");
  //novaColunaDados.textContent = ;
  linha.appendChild(novaColunaDados);

});

/*
for(var i; i<42; i++){

var peso= percorrendoTabela[posicaoPeso]
var altura= percorrendoTabela[posicaoAltura]


imc.textContent= calculoIMC(peso, altura);


 classificacao.textContent= conteudoClassificacao(imc, posicaoClassificacao);


posicaoImc += 6;
posicaoClassificacao+=6;
posicaoAltura+=6;
posicaoPeso+=6;
} 
*/
/*function calculoIMC(altura, peso) {
  var imc = peso / (altura ^ 2)
  return imc;
}


function conteudoClassificacao(imc, posicaoClassificacao) {
  classificacao = getElementsByTagName[posicaoClassificacao];

  if (imc < 24.99) {
    if (imc < 18, 5) {//Baixo Peso

      classificacao.textContent = "Baixo Peso";
      classificacao.style.backgroundColor = "green";

    } else { // normal

      classificacao.textContent = "Normal";
      classificacao.style.backgroundColor = "Yellow";
    }
  }
  else {
    if (imc > 25) {

      if (imc < 29.99) {//Sobrepeso
        classificacao.textContent = "Sobrepeso";
        classificacao.style.backgroundColor = "Orange";
      } else {//Obesidade
        classificacao.textContent = "Obesidade";
        classificacao.style.backgroundColor = "Red";
      }

    }
  }

}
*/

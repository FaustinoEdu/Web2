var novosTds = 4;
var classificacao;

var minhaTabela = document.querySelector("table");//Selecioana elementos 

// Adicione a nova coluna de cabeçalho
var novaColunaCabecalho = document.createElement("th"); // Criando novo cabeçalho da coluna
novaColunaCabecalho.textContent = "Classificações"; // Informações do cabeçalho
minhaTabela.querySelector("thead tr").appendChild(novaColunaCabecalho);//  selecionando tr de table, appendchilld pega o ultimo 

// Adicione novas colunas de dados à tabela
var linhas = minhaTabela.querySelectorAll("tbody tr");  // Consultando o corpo da tabela
linhas.forEach(function (linha) {//forEach passa uma função de callback

  var novaColunaDados = document.createElement("td");
  //novaColunaDados.textContent = ;
  linha.appendChild(novaColunaDados);

});
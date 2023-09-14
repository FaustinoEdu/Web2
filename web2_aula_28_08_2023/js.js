//document.getElementById("demo").style.color = "red";
var novosTd=4;

var valorAltura;
var valorPeso;

const classificacoesText = document.createTextNode("Classificações");

const novaColuna= document.createElement("th");
const novaLinha= document.createElement("td");

const vetorDeTds= document.getElementsByTagName("td");
const vetorDeths= document.getElementsByTagName("th");

novaColuna.appendChild(classificacoesText);

for(const i=0 ; i<vetorDeTds; i++ ){

  if(i=4){ 
    //Criando coluna
    
   
    
  }
 
 if(i=novosTd){
 
  const novaLinha= document.createElement("td");

  vetorDeThs[i].innerHTML= "<th>  <th>"
 }



novosTd= novosTd+5;
}










//var content = element.innerHTML; permite modificar elementos de um html

//const buscandoImclinha= document.getElementsByTagName("td").getElementById("imc");
//const box = document.querySelector("#imc"); busca pelo id, pesquisar sobre o query

/*const box = document.getElementById("box");
box.innerHTML = "<p>Box</p>";*/
//document.getElementById("demo").style.color = "red";
var novosTd=4;



const vetorDeTds= document.getElementsByTagName("td");
const vetorDeths= document.getElementsByTagName("th");

for(const i=0 ; i<vetorDeTds; i++ ){

  if(i=4){ //Criando coluna

    const novaColuna= document.createElement("th");
    vetorDeTds[i].innerHTML= "<th> Classificações <th>"
  }
 
 if(i=novosTd){
 
  const novaLinha= document.createElement("td");

 }



novosTd= novosTd+4;
}










//var content = element.innerHTML; permite modificar elementos de um html

//const buscandoImclinha= document.getElementsByTagName("td").getElementById("imc");
//const box = document.querySelector("#imc"); busca pelo id, pesquisar sobre o query

/*const box = document.getElementById("box");
box.innerHTML = "<p>Box</p>";*/
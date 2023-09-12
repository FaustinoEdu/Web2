var opPeso = 1;
var opAltura = 2;
var contadoraElements = document.getElementsByTagName("td").length;
var opImc = 4;
var opCla = 5;


var colunaClassifi = document.createElement("th");
var descClassifi = document.createTextNode("Classificação");




for(let i=0; i < contadoraElements; i++){

  if(i==4){
    document.getElementById("tabelas").appendChild(x); ;
  }


  document.createElement("td");
  
}


for (let i = 0; i < contadoraElements; i++) {
  var peso = document.getElementsByTagName("td")[opPeso].innerHTML;
  var altura = document.getElementsByTagName("td")[opAltura].innerHTML;

  var imc = peso / (altura ^ 2)

  document.getElementsByTagName("td")[opImc].innerHTML = imc;


  if (imc > 25) {



  }
  else {
    if (imc >= 18, 5) {


    }
    else {
      if (imc > 0) {


      }


    }
  }


  opPeso = opPeso + 6;
  opAltura = opAltura + 6;
  opImc = opImc + 6;
  opCla = opCla + 6;
}


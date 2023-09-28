function categoria() {
  var botoes = document.getElementsByName("btnradio");

  if (botoes[0].checked) {
    return "random"
  }
  if (botoes[1].checked) {
    return 'animal'
  }
  if (botoes[2].checked) {
    return 'career'

  }
  if (botoes[3].checked) {
    return 'celebrity'

  }
  if (botoes[4].checked) {
    return 'dev'
  }
  if (botoes[5].checked) {
    return 'explicit'
  }
  if (botoes[6].checked) {
    return 'fashion'
  }
  if (botoes[7].checked) {
    return 'food'
  }
  if (botoes[8].checked) {
    return 'history'
  }
  if (botoes[9].checked) {
    return 'money'
  }
  if (botoes[10].checked) {
    return 'movie'
  }
  if (botoes[11].checked) {
    return 'music'
  }
  if (botoes[12].checked) {
    return 'political'
  }
  if (botoes[13].checked) {
    return 'religion'
  }
  if (botoes[14].checked) {
    return 'science'
  }
  if (botoes[15].checked) {
    return 'sport'
  }
  if (botoes[16].checked) {
    return 'travel'
  }

}




async function postagem(categoria) {
  let postagemElement = document.querySelector('#postagem');

  if (categoria === 'random') {
    var url = 'https://api.chucknorris.io/jokes/random';
  } else {
    var url = `https://api.chucknorris.io/jokes/random?category=${categoria}`;
  }



  const response = await fetch(url); // Aguarda a resposta da API.

  const json = await response.json(); // Aguarda a resposta JSON da API.

  let postsHTML = '<div class="p-3 bg-dark text-danger text-center form-control border-success"><h1>' + json.value + '</h1></div>';

  postagemElement.innerHTML = postsHTML;

}



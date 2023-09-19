async function nasaApi(){
    let postagem= document.querySelector('#nasaApi');
    let response = await fetch('http://tle.ivanstanojevic.me/api/tle?search={q}	');//Fetch ->Cria uma promessa para carregar alguns registros . Await espera a promessa
    let json= await response.json();
    console.log(json[1])
   
    if (json.length>0){
       postagem.innerHTML= '';
       for(let i in json){
        let postsHTML ='<div><h1>'+json[i].title+'</h1>'+json[i].body+'</div>';
        postagem.innerHTML=postagem.innerHTML+postsHTML;
       
       }
   }
       else{
   console.error;
   alert('Algo está errado');
   postagem.innerHTML='Servidor parou'
   
       }




}
nasaApi();
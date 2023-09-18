async function postagem(){
 let postagem= document.querySelector('#postagem');
 let response = await fetch('https://jsonplaceholder.typicode.com/posts');//Fetch ->Cria uma promessa para carregar alguns registros . Await espera a promessa
 let json= await response.json();
 console.log(json[1])


}
if (json.length){
postagem.innerHTML= '';
for(let i in json){
 let postsHTML ='<div><h1>'+json[i].title+'</h1>'+json[i].body+'</div>';
 postagem.innerHTML=postagem.innerHTML+postsHTML;

}



}
postagem()

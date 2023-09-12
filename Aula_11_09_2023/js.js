async function postagem(){
 let postagem= document.querySelector('#postagem');
 let response = await fetch('https://jsonplaceholder.typicode.com/posts');
 let json= await response.json();
 console.log(json[1])


}
postagem()


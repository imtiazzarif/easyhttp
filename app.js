const http = new EasyHTTP
http.get('https://jsonplaceholder.typicode.com/posts').then(data=>console.log(data)).catch(err=> console.log(err))

 
const data = {
  
    name:"imtiaz doe",
    username:"john",
    email:"egdf@gs"
}
// http.post('https://jsonplaceholder.typicode.com/posts',data).then(res=> console.log(res)).catch(err=>console.log(err))
 
// http.put('https://jsonplaceholder.typicode.com/posts/5',data).then(data=>console.log(data)).catch(err=>console.log(err))
// http.delete('https://jsonplaceholder.typicode.com/posts/5').then(del=>console.log(del)).catch(err=>console.log(err))
let output = ""
for(let i =0;i < 1000;i++){
  output += `<li>thx dos</li>`


}
document.querySelector('#output').innerHTML = output
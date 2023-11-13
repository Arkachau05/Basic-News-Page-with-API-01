let page_limit =45;  
function data(page_limit){
    document.getElementsByClassName('api')[0].innerHTML='';//taking the api 
fetch("https://newsapi.org/v2/everything?q=all&apiKey=f4ac7e976f9f4383a476eadfa46efe30")
.then(response => response.json())
.then(data=> {
let article=data.articles;
console.log(article[0]);
let n= article.length<page_limit ?  article.length: page_limit;
for (let i = 0; i < n; i++)
{
    document.getElementsByClassName('api')[0].innerHTML+=
    `<div style="border: black solid 2px; width: 376px;margin:10px">
    <div class="imagebox">
       <img src="${article[i].urlToImage}" class="image">
   </div>
     <div class="title">${article[i].title}
     </div>
     <div class="description">${article[i].description}
     </div>
     <div class="author">${article[i].author}
     </div>
</div>`;
}

})
.catch(err => console.error(err));
}

data(page_limit);//increase page 
function load() { 
    page_limit+=9;
    data(page_limit);
 }

function search(){
alert("hey2");
 document.getElementsByClassName('api')[0].innerHTML='';
  let value=document.getElementById('search').value;
  fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=f4ac7e976f9f4383a476eadfa46efe30`)
.then(response => response.json())
.then(data=> {
let article=data.articles;
//console.log(article[0]);
for(let i=0;i<article.length;i++)
{
    document.getElementsByClassName('api')[0].innerHTML+=
    `<div style="border: black solid 2px; width: 376px;margin:10px">
    <div class="imagebox">
       <img src="${article[i].urlToImage}" class="image">
   </div>
     <div class="title">${article[i].title}
     </div>
     <div class="description">${article[i].description}
     </div>
     <div class="author">${article[i].author}
     </div>
</div>`;
}

})


}

	

	


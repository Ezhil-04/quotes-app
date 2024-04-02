
const api_url="https://api.quotable.io/random";
let quote=document.getElementById("quote")
let span=document.getElementById("span")
let qbtn=document.getElementById("qbtn")


async function fetchdata(url)
{
    try{
const response= await fetch(url);
var data=await response.json();
console.log(data);
quote.innerHTML=`"${data.content}"`;
span.innerHTML=data.author;

    }
    catch(Exception){
console.error();

    }
}



function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}`+"   -- "+span.innerHTML)
}

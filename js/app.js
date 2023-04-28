
let button = document.querySelector(".mode")
let body = document.querySelector("body")
let nav = document.querySelector("header ")
let li = document.querySelectorAll("nav  a")
let head = document.querySelectorAll(".H")
let table = document.querySelector("table")
let logo = document.querySelector(".logo a")


button.onclick = function () {
    if(body.classList.contains("dark") )
    {
        body.classList.remove("dark") 
        for(let i=0;i<head.length;i++){
            head[i].style.color="darkslategrey"}
            button.textContent="Dark mode"
            logo.style.color="black"
            nav.style.background="white"
            nav.style.boxShadow="0 10px 60px black"
            for(let i=0;i<li.length;i++)
        {
            li[i].style.color="black"
        }
            table.style.boxShadow=" 0px 0px 7px black"
           
           
    }
    else{
        body.classList.add("dark")
        for(let i=0;i<head.length;i++){
        head[i].style.color="green"}
        button.textContent="Light mode"
        logo.style.color="white"

        nav.style.background="black"
        nav.style.boxShadow="0px 0px 20px white"
        for(let i=0;i<li.length;i++)
        {
            li[i].style.color="white"
        }
        table.style.background="white"
        table.style.color="black"
        table.style.boxShadow=" 0 0 7px white"
       
       
      
    }
    
}    
// nav
var toggle =document.querySelector( '.menu-toggle');
toggle.onclick=function(){
    var nav=document.querySelector('nav');
    nav.classList.toggle('active')

}
var link=document.querySelectorAll('ul li ');
for(let i=0 ; i<link.length; i++){

link[i].onclick=function(){
    var nav=document.querySelector('nav');
    nav.classList.toggle('active')
    
}

}
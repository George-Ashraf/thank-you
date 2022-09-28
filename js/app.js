
let button = document.querySelector(".mode")
let body = document.querySelector("body")
let nav = document.querySelector(".nav ")
let li = document.querySelectorAll(".nav  a")
let head = document.querySelectorAll(".H")
let table = document.querySelector("table")

button.onclick = function () {
    if(body.classList.contains("dark") )
    {
        body.classList.remove("dark") 
        for(let i=0;i<head.length;i++){
            head[i].style.color="darkslategrey"}
            button.textContent="Dark mode"
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
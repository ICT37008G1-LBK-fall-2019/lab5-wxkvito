let input = document.querySelector("myInput");
    document.getElementById("myFunction").addEventListener("click", Myfunction);
let lp = document.querySelector("latop-item");
let pc = document.querySelector("desktop-item");


function Myfunction(){
    if(input.indexOf()== "laptop"){
 lp.style.backgroundColor = 'green';
    }
    else if (input.indexOf()== "desktop"){
        pc.style.backgroundColor = 'blue';
    }
        
    }
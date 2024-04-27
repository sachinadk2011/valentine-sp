const div1 = document.getElementsByClassName("t1")[0];  
const div2 = document.getElementsByClassName("t2c")[0];
const divs = document.querySelectorAll(".t2, .t21, .t22, .t23, .t24, .t25");
const div3 = document.getElementsByClassName("t3c")[0];
const div4 = document.getElementsByClassName("t4")[0];
const div5 = document.getElementsByClassName("t5")[0];
const div6 = document.getElementsByClassName("t6")[0];
const div7 = document.getElementsByClassName("t7")[0];
const div8 = document.getElementsByClassName("t8")[0];

div1.style.animation = "dance 3s ease-in-out 1";
div1.addEventListener("animationend", animation1);

function animation1(){
    this.style.display=" none";
    div2.style.animation = "start 15s forwards";
    div2.style.animationDelay = "4s";
    divs.forEach((element, index) => {
        element.style.animation = "letter-by-letter 2s ease-in-out forwards";
        
        
        
        element.style.animationDelay = `${index * 1}s`;
         // Adjust the delay as needed
         
    });
    divs.addEventListener("animationend", animation2);
     
    function animation2(){
        this.style.display="none";
        
    }
    
    
}






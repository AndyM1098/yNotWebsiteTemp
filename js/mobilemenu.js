"use strict";
function sleep(milliseconds) {
   const date = Date.now();
   let currentDate = null;
   do {
       currentDate = Date.now();
   } while (currentDate - date < milliseconds);
}

function mobileMenu(x){
   //console.log(window.location.pathname);
   x.classList.toggle("change");
   
   if(document.querySelector('#navTable').classList.contains("navTable_open") == false){
       document.getElementById("headerBackground").classList.add("test_color");
     
       document.getElementById("headerBackground").animate( 
           [ //keyframes
               {transform: 'translateX(-250px)'}, {transform: 'translateX(0px)'}
           ], {
               duration: 150
           }
       );
       //Set time out for syncing the animation of the header ONLY on the carousel
       setTimeout(( ) => document.querySelector('#navTable').classList.add("navTable_open"), 75);
   }else{
       //document.getElementById("test").style.background = "none";
       document.getElementById("headerBackground").animate( 
           [ //keyframes
               {transform: 'translateX(0px)'}, {transform: 'translateX(500px)'}
           ], {
               duration: 250
           }
       );
        document.querySelector('#navTable').classList.remove("navTable_open");
       setTimeout(() => document.getElementById("headerBackground").classList.remove("test_color"), 150 );
       //document.getElementById("test").classList.remove("test_color");
   }
}
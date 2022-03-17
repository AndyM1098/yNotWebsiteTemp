"use strict";

function headerFade(){

    let currScrollPos = window.scrollY;
    let currTopSize = window.innerHeight;
    
    document.getElementById("headerBackground").style.opacity = String( 100 * ( ( 270 - ( currTopSize - currScrollPos) ) / 180 ) ) + "%";
    console.log(String( 100 * ( ( 270 - ( currTopSize - currScrollPos) ) / 180 ) ) + "%");
    /*if(currScrollPos >=  (currTopSize - 270 ) && currScrollPos <= currTopSize - 90){
        
    }
    else if(currScrollPos >= currTopSize){
        document.getElementById("headerBackground").style.opacity = 100;
    }
    else if(currScrollPos <= ( currTopSize - 270 ) ){
        document.getElementById("headerBackground").style.opacity = 0;
    }*/
    
    

    

}

//document.addEventListener('scroll', headerFade, {capture: true, passive: true });

headerFade();
//addEventListener(onscroll, headerFade);

window.onscroll = headerFade;
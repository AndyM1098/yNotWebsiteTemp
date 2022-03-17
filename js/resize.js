//js script that dynamically changes page elements based on window size
"use strict";
function reportResize() {
    document.getElementById("pagesize-ref").innerHTML = window.innerHeight + ' ' + window.innerWidth;
    document.getElementById("top-image").height = window.innerHeight;
    document.getElementById("top-image").width = window.innerWidth;
    document.getElementById("bot-image").height = window.innerHeight;
    document.getElementById("bot-image").width = window.innerWidth;
    document.getElementById("bodyContent").style.top = String( window.innerHeight ) + 'px';
    document.getElementById("footer").style.top = String( window.innerHeight + document.getElementById("bodyContent").style.height ) + 'px';

}

reportResize();

window.onresize = reportResize;
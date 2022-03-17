//js script that changes image every x seconds
"use strict";
function makeTransparent() {
    document.getElementById(image).style.opacity = String(1-(i/10));
    i++;
    if (i == 11) {
        i = 1;
        changeImg();
    }
    else {
        setTimeout(makeTransparent,30);
    }
}

function changeImg() {
    if (top_num == 0) {
        document.getElementById("bot-image").style.zIndex = "1";
        document.getElementById("top-image").style.zIndex = "0";
        document.getElementById("top-image").src = images[num];
        document.getElementById("top-image").style.opacity ="1";
        image = "bot-image";
        image2 = "top-image";
        top_num = 1;
    }
    else {
        document.getElementById("top-image").style.zIndex = "1";
        document.getElementById("bot-image").style.zIndex = "0";
        document.getElementById("bot-image").src = images[num];
        document.getElementById("bot-image").style.opacity ="1";
        image = "top-image";
        image2 = "bot-image";
        top_num = 0;
    }

    if (num==2) {
        num=0;
    }
    else{
        num++;
    }
    
    setTimeout(makeTransparent, 5000);
}

let images = ["images/worlds2.jpg","images/worlds_table.jpg","images/lh6cEyXw.jpeg"];
let num = 2,op=1.0,top_num = 0,i=1;
let image = "top-image",image2 = "bot-image";
document.getElementById("top-image").src = images[0];
document.getElementById("bot-image").src = images[1];
setTimeout(makeTransparent, 5000);

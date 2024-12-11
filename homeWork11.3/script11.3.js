let elText = document.getElementById("colorText");
let button = document.getElementById("colorBtn");

let isColor = false;
button.addEventListener ("click", function () {
    if (isColor){
        elText.style.color = "blue";
    }else {
        elText.style.color = "yellow";
    }
    isColor = !isColor;
});
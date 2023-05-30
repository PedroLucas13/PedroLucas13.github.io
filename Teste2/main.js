function aYes(){
    var rTopNumber = Math.floor(Math.random() * 100) + 30;
    var rRightNumber = Math.floor(Math.random() * 100) + 30;
    document.querySelector(".yes").setAttribute("style", `top:${rTopNumber}px; right:${rRightNumber}px`)
}
function aNo(){
    document.querySelector(".texto").setAttribute("style", "display:none");
    document.querySelector(".video").setAttribute("style", "display:block");
    document.querySelector("video").play();
}

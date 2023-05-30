var n=0;
var l=1;
function alerts(){
    if(localStorage.getItem("loads") == 2){
        alert("Então você reconsiderou a resposta? Ainda não...");
        document.querySelector(".no").setAttribute("style", "top:0px; right:0px");
        document.querySelector(".texto").setAttribute("style", "display:none");
        document.querySelector(".image").setAttribute("style", "display:flex");
        l++;
        localStorage.setItem("loads", l);
    } else if (localStorage.getItem("loads") == 3){
        alert("Ok, você venceu. Pode responder denovo.");
        localStorage.setItem("loads", 0);
        localStorage.setItem("aNo", "no")
    }
    if(localStorage.getItem("aNo") == "yes"){
        document.querySelector(".no").setAttribute("style", "top:0px; right:0px");
        document.querySelector(".texto").setAttribute("style", "display:none");
        document.querySelector(".image").setAttribute("style", "display:flex");
        l++;
        localStorage.setItem("loads", l);
    }
}
function aNo(){
    if(n==2){
        alert("É serio? Lhe darei mais uma chance. Use-a com sabedoria.")
    }
    if(n==3){
        alert("Ok, você fez sua escolha.");
        document.querySelector(".no").setAttribute("style", "top:0px; right:0px");
        document.querySelector(".texto").setAttribute("style", "display:none");
        document.querySelector(".image").setAttribute("style", "display:flex");
        localStorage.setItem("aNo", "yes");
        SendToSheets("Não");
        return
    }
    var rTopNumber = Math.floor(Math.random() * 100) + 30;
    var rRightNumber = Math.floor(Math.random() * 100) + 30;
    document.querySelector(".no").setAttribute("style", `top:${rTopNumber}px; right:${rRightNumber}px`);
    n++;
    SendToSheets("Não");
}
function aYes(){
    document.querySelector(".texto").setAttribute("style", "display:none");
    document.querySelector(".video").setAttribute("style", "display:flex");
    document.querySelector("video").play();
    SendToSheets("Sim");
}
function SendToSheets(resposta){
    var form = document.getElementById("gform");
    var name = document.getElementById("name");
    var message = document.getElementById("message");
    var button = document.getElementById("button");

    name.value = "Resposta";
    message.value = resposta;
    button.click();
    console.log("sended");
}
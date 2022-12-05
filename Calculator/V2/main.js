function loader(){
    var load;
    load = setTimeout(showPage, 1500);
    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("calc").style.display = "block";
    document.getElementById('calcs').focus();
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        document.getElementById('calcs').setAttribute("onclick", "blur();");
    };
    keyboardInput();
    }
}
function C(){
    document.getElementById("calcs").value = "";
    document.getElementById("res").innerHTML = "";
    res.setAttribute("style", "display: none;");
    document.getElementById('calcs').focus();
    if (x.matches) {
        document.getElementById('calcs').setAttribute("onclick", "blur();");
        document.getElementById('calcs').setAttribute("readonly", "");
    }
}
function backspace(){
    let calcs = document.getElementById("calcs");
    calcs.value = calcs.value.slice(0, calcs.value.length -1);
}
function keyboardInput(){
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 8) {
            let calcs = document.getElementById("calcs");
            calcs.focus();
            calcs.value = calcs.value.slice(0, calcs.value.length);
        }
    });
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 13) {
            equal();
        }
    });
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 27) {
            C();
        }
    });
    document.getElementById('calcs').focus();
    var x = window.matchMedia("(max-width: 800px)")
    if (x.matches) {
        document.getElementById('calcs').setAttribute("onclick", "blur();");
    }
}
function disable(){
 document.onkeydown = function (e) 
 {
  return false;
 }
}
function check(){
    let calcs = document.getElementById("calcs");
    let operators = calcs.value.split(/([√%/÷*x+-])/);
    let letters = calcs.value.split(/([^0-9.√/%÷*x+-])/);
    
    if (calcs.value.includes(letters) == false){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    }
    if (operators.length > 4){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    }
    
    
}
function equal(){
    let calcs = document.getElementById("calcs").value;
    let res = document.getElementById("res");
    if (calcs.includes("+") == true) {
        result = res.innerHTML.split(/[^.0-9]/).filter(Boolean).map(Number).reduce((x,y)=>x+y,0);
        sum = calcs.split(/[^.0-9]/).filter(Boolean).map(Number).reduce((x,y)=>x+y,0);
        res.innerHTML = '=' + `${Number(result) + Number(sum)}`;
        res.setAttribute("style", "display: block;");
        document.getElementById("calcs").value = "";
        document.getElementById('calcs').focus();
        if (x.matches) {
            document.getElementById('calcs').setAttribute("onclick", "blur();");
        }
    }
    if (calcs.includes("-") == true) {
        result = res.innerHTML.split(/[^.0-9]/).filter(Boolean).map(Number).reduce((x,y)=>x-y,0);
        min = calcs.split(/[^.0-9]/).filter(Boolean).map(Number).reduce((x,y)=>x-y,0);
        res.innerHTML = '=' + `${Number(result) - Number(min)}`;
        res.setAttribute("style", "display: block;");
        document.getElementById("calcs").value = "";
        document.getElementById('calcs').focus();
        if (x.matches) {
            document.getElementById('calcs').setAttribute("onclick", "blur();");
        }
    }
    if (calcs.includes("x") == true || calcs.includes("*") == true) {
        result = res.innerHTML.split(/[^.0-9]/).filter(Boolean).map(Number).reduce((x,y)=>x*y,1);
        mul = calcs.split(/[^.0-9]/).filter(Boolean).map(Number).reduce((x,y)=>x*y,1);
        if (result == "1") {
            res.innerHTML = '=' + `${Number(mul)}`;
            res.setAttribute("style", "display: block;");
            document.getElementById("calcs").value = "";
            document.getElementById('calcs').focus();
            if (x.matches) {
                document.getElementById('calcs').setAttribute("onclick", "blur();");
            }
        } else {
        res.innerHTML = '=' + `${Number(mul) * Number(result)}`;
        res.setAttribute("style", "display: block;");
        document.getElementById("calcs").value = "";
        document.getElementById('calcs').focus();
        if (x.matches) {
            document.getElementById('calcs').setAttribute("onclick", "blur();");
        }
        }
    }
    if (calcs.includes("÷") == true || calcs.includes("/") == true) {
        result = res.innerHTML.split(/[^.0-9]/).filter(Boolean).map(Number);
        div = calcs.split(/[^.0-9]/).filter(Boolean).map(Number);
        if (result.length == 0){
            for (i = 0; i < div.length; i++){
                res.innerHTML = '=' + `${div[i-1] / div[i]}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
                document.getElementById('calcs').focus();
                if (x.matches) {
                    document.getElementById('calcs').setAttribute("onclick", "blur();");
                }
            }
        } else {
            div = calcs.split(/[^.0-9]/).filter(Boolean).map(Number).reduce((x,y)=>x / y,0.1);
            result = res.innerHTML.split(/[^.0-9]/).filter(Boolean).map(Number).reduce((x,y)=>x / y,0.1);
            res.innerHTML = '=' + `${div / result}`;
            res.setAttribute("style", "display: block;");
            document.getElementById("calcs").value = "";
            document.getElementById('calcs').focus();
            if (x.matches) {
                document.getElementById('calcs').setAttribute("onclick", "blur();");
            }
        }
    }
    if (calcs.includes("%") == true) {
        per = calcs.split(/[^.0-9]/).filter(Boolean).map(Number).reduce((x,y)=>x + y,0);
        result = res.innerHTML.split(/[^.0-9]/).filter(Boolean).map(Number).reduce((x,y)=>x + y,0);
        res.innerHTML = '=' + `${Number(result) * Number(per) / 100}`;
        res.setAttribute("style", "display: block;");
        document.getElementById("calcs").value = "";
        document.getElementById('calcs').focus();
        if (x.matches) {
            document.getElementById('calcs').setAttribute("onclick", "blur();");
        }
    }
    if (calcs.includes("√") == true) {
        result = res.innerHTML.split(/[^.0-9]/).filter(Boolean).map(Number);
        raiz = calcs.split(/[^.0-9]/).filter(Boolean).map(Number);
        res.innerHTML = '=' + `${Math.sqrt(Number(raiz))}`;
        res.setAttribute("style", "display: block;");
        document.getElementById("calcs").value = "";
        document.getElementById('calcs').focus();
        if (x.matches) {
            document.getElementById('calcs').setAttribute("onclick", "blur();");
        }
    }

}
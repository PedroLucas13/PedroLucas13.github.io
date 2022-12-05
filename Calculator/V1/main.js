function cls(){
    window.localStorage.clear('n1');
    window.localStorage.clear('n2');
    window.localStorage.clear('n3');
}
function clean(){
    window.localStorage.clear('n1');
    window.localStorage.clear('n2');
    window.localStorage.clear('n3');
    window.location.reload();
}
function sum(){
    var number = document.getElementById("number");
    var equal = document.getElementById("equal");
    var res = document.getElementById("res");
    const n1 = window.localStorage.getItem("n1");
    const n2 = window.localStorage.getItem("n2");
    const n3 = window.localStorage.getItem("n3");

    if (number.value == ""){
        alert("Por favor coloque um número!");
    }
    if (number.value != "" && n1 == null){
        window.localStorage.setItem('n1', number.value);
        res.innerHTML = `${number.value} +`;
        number.value = "";
        window.localStorage.setItem('n3', n1);
    }
    if (number.value != "" && n1 != null && n2 == null){
        window.localStorage.setItem('n2', number.value);
        var n = number.value
        const sum = Number(n1) + Number(n);
        res.innerHTML = `${n1} + ${number.value} = ${sum}`;
        number.value = "";
        window.localStorage.setItem('n3', sum);
    }
    if (number.value != "" && n1 != null && n2 != null){
        window.localStorage.setItem('n1', n3);
        window.localStorage.setItem('n2', number.value)
        var n = number.value
        const sum = Number(n3) + Number(n);
        res.innerHTML = `${n3} + ${number.value} = ${sum}`;;
        number.value = "";
        window.localStorage.setItem('n3', sum);
    }
}
function min(){
    var number = document.getElementById("number");
    var equal = document.getElementById("equal");
    var res = document.getElementById("res");
    const n1 = window.localStorage.getItem("n1");
    const n2 = window.localStorage.getItem("n2");
    const n3 = window.localStorage.getItem("n3");

    if (number.value == ""){
        alert("Por favor coloque um número!");
    }
    if (number.value != "" && n1 == null){
        window.localStorage.setItem('n1', number.value);
        res.innerHTML = `${number.value}`;
        number.value = "";
        window.localStorage.setItem('n3', n1);
    }
    if (number.value != "" && n1 != null && n2 == null){
        window.localStorage.setItem('n2', number.value);
        var n = number.value
        const sum = Number(n1) - Number(n);
        res.innerHTML = `${n1} - ${number.value} = ${sum}`;
        number.value = "";
        window.localStorage.setItem('n3', sum);
    }
    if (number.value != "" && n1 != null && n2 != null){
        window.localStorage.setItem('n1', n3);
        window.localStorage.setItem('n2', number.value)
        var n = number.value
        const sum = Number(n3) - Number(n);
        res.innerHTML = `${n3} - ${number.value} = ${sum}`;;
        number.value = "";
        window.localStorage.setItem('n3', sum);
    }
}
function min(){
    var number = document.getElementById("number");
    var equal = document.getElementById("equal");
    var res = document.getElementById("res");
    const n1 = window.localStorage.getItem("n1");
    const n2 = window.localStorage.getItem("n2");
    const n3 = window.localStorage.getItem("n3");

    if (number.value == ""){
        alert("Por favor coloque um número!");
    }
    if (number.value != "" && n1 == null){
        window.localStorage.setItem('n1', number.value);
        res.innerHTML = `${number.value}`;
        number.value = "";
        window.localStorage.setItem('n3', n1);
    }
    if (number.value != "" && n1 != null && n2 == null){
        window.localStorage.setItem('n2', number.value);
        var n = number.value
        const sum = Number(n1) - Number(n);
        res.innerHTML = `${n1} - ${number.value} = ${sum}`;
        number.value = "";
        window.localStorage.setItem('n3', sum);
    }
    if (number.value != "" && n1 != null && n2 != null){
        window.localStorage.setItem('n1', n3);
        window.localStorage.setItem('n2', number.value)
        var n = number.value
        const sum = Number(n3) - Number(n);
        res.innerHTML = `${n3} - ${number.value} = ${sum}`;;
        number.value = "";
        window.localStorage.setItem('n3', sum);
    }
}
function mul(){
    var number = document.getElementById("number");
    var equal = document.getElementById("equal");
    var res = document.getElementById("res");
    const n1 = window.localStorage.getItem("n1");
    const n2 = window.localStorage.getItem("n2");
    const n3 = window.localStorage.getItem("n3");

    if (number.value == ""){
        alert("Por favor coloque um número!");
    }
    if (number.value != "" && n1 == null){
        window.localStorage.setItem('n1', number.value);
        res.innerHTML = `${number.value}`;
        number.value = "";
        window.localStorage.setItem('n3', n1);
    }
    if (number.value != "" && n1 != null && n2 == null){
        window.localStorage.setItem('n2', number.value);
        var n = number.value
        const sum = Number(n1) * Number(n);
        res.innerHTML = `${n1} x ${number.value} = ${sum}`;
        number.value = "";
        window.localStorage.setItem('n3', sum);
    }
    if (number.value != "" && n1 != null && n2 != null){
        window.localStorage.setItem('n1', n3);
        window.localStorage.setItem('n2', number.value)
        var n = number.value
        const sum = Number(n3) * Number(n);
        res.innerHTML = `${n3} x ${number.value} = ${sum}`;;
        number.value = "";
        window.localStorage.setItem('n3', sum);
    }
}
function div(){
    var number = document.getElementById("number");
    var equal = document.getElementById("equal");
    var res = document.getElementById("res");
    const n1 = window.localStorage.getItem("n1");
    const n2 = window.localStorage.getItem("n2");
    const n3 = window.localStorage.getItem("n3");

    if (number.value == ""){
        alert("Por favor coloque um número!");
    }
    if (number.value != "" && n1 == null){
        window.localStorage.setItem('n1', number.value);
        res.innerHTML = `${number.value}`;
        number.value = "";
        window.localStorage.setItem('n3', n1);
    }
    if (number.value != "" && n1 != null && n2 == null){
        window.localStorage.setItem('n2', number.value);
        var n = number.value
        const sum = Number(n1) / Number(n);
        res.innerHTML = `${n1} ÷ ${number.value} = ${sum}`;
        number.value = "";
        window.localStorage.setItem('n3', sum);
    }
    if (number.value != "" && n1 != null && n2 != null){
        window.localStorage.setItem('n1', n3);
        window.localStorage.setItem('n2', number.value)
        var n = number.value
        const sum = Number(n3) / Number(n);
        res.innerHTML = `${n3} ÷ ${number.value} = ${sum}`;;
        number.value = "";
        window.localStorage.setItem('n3', sum);
    }
}
function equal(){
    var number = document.getElementById("number");
    var equal = document.getElementById("equal");
    var res = document.getElementById("res");
    const n1 = window.localStorage.getItem("n1");
    const n2 = window.localStorage.getItem("n2");
    const n3 = window.localStorage.getItem("n3");

    if (res.innerHTML.indexOf("+") != -1){
        if (number.value == ""){
            alert("Por favor coloque um número!");
        }
        if (number.value != "" && n1 == null){
            window.localStorage.setItem('n1', number.value);
            res.innerHTML = `${number.value}`;
            number.value = "";
            window.localStorage.setItem('n3', n1);
        }
        if (number.value != "" && n1 != null && n2 == null){
            window.localStorage.setItem('n2', number.value);
            var n = number.value
            const sum = Number(n1) + Number(n);
            res.innerHTML = `${n1} + ${number.value} = ${sum}`;
            number.value = "";
            window.localStorage.setItem('n3', sum);
        }
        if (number.value != "" && n1 != null && n2 != null){
            window.localStorage.setItem('n1', n3);
            window.localStorage.setItem('n2', number.value)
            var n = number.value
            const sum = Number(n3) + Number(n);
            res.innerHTML = `${n3} + ${number.value} = ${sum}`;;
            number.value = "";
            window.localStorage.setItem('n3', sum);
        }
    }
    if (res.innerHTML.indexOf("-") != -1){
        if (number.value == ""){
            alert("Por favor coloque um número!");
        }
        if (number.value != "" && n1 == null){
            window.localStorage.setItem('n1', number.value);
            res.innerHTML = `${number.value}`;
            number.value = "";
            window.localStorage.setItem('n3', n1);
        }
        if (number.value != "" && n1 != null && n2 == null){
            window.localStorage.setItem('n2', number.value);
            var n = number.value
            const sum = Number(n1) - Number(n);
            res.innerHTML = `${n1} - ${number.value} = ${sum}`;
            number.value = "";
            window.localStorage.setItem('n3', sum);
        }
        if (number.value != "" && n1 != null && n2 != null){
            window.localStorage.setItem('n1', n3);
            window.localStorage.setItem('n2', number.value)
            var n = number.value
            const sum = Number(n3) - Number(n);
            res.innerHTML = `${n3} - ${number.value} = ${sum}`;;
            number.value = "";
            window.localStorage.setItem('n3', sum);
        }
    }
    if (res.innerHTML.indexOf("x") != -1){
        if (number.value == ""){
            alert("Por favor coloque um número!");
        }
        if (number.value != "" && n1 == null){
            window.localStorage.setItem('n1', number.value);
            res.innerHTML = `${number.value}`;
            number.value = "";
            window.localStorage.setItem('n3', n1);
        }
        if (number.value != "" && n1 != null && n2 == null){
            window.localStorage.setItem('n2', number.value);
            var n = number.value
            const sum = Number(n1) * Number(n);
            res.innerHTML = `${n1} x ${number.value} = ${sum}`;
            number.value = "";
            window.localStorage.setItem('n3', sum);
        }
        if (number.value != "" && n1 != null && n2 != null){
            window.localStorage.setItem('n1', n3);
            window.localStorage.setItem('n2', number.value)
            var n = number.value
            const sum = Number(n3) * Number(n);
            res.innerHTML = `${n3} x ${number.value} = ${sum}`;;
            number.value = "";
            window.localStorage.setItem('n3', sum);
        }
    }
    if (res.innerHTML.indexOf("÷") != -1){
        if (number.value == ""){
            alert("Por favor coloque um número!");
        }
        if (number.value != "" && n1 == null){
            window.localStorage.setItem('n1', number.value);
            res.innerHTML = `${number.value}`;
            number.value = "";
            window.localStorage.setItem('n3', n1);
        }
        if (number.value != "" && n1 != null && n2 == null){
            window.localStorage.setItem('n2', number.value);
            var n = number.value
            const sum = Number(n1) / Number(n);
            res.innerHTML = `${n1} ÷ ${number.value} = ${sum}`;
            number.value = "";
            window.localStorage.setItem('n3', sum);
        }
        if (number.value != "" && n1 != null && n2 != null){
            window.localStorage.setItem('n1', n3);
            window.localStorage.setItem('n2', number.value)
            var n = number.value
            const sum = Number(n3) / Number(n);
            res.innerHTML = `${n3} ÷ ${number.value} = ${sum}`;;
            number.value = "";
            window.localStorage.setItem('n3', sum);
        }
    }
}
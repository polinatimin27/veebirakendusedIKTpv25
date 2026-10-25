
let eelminePilt = -1;

function randomPilt() {
    let pildid = ["1.png", "2.png", "3.png", "tyhi.png"];
    let number = Math.floor(Math.random() * pildid.length);

    if (number === eelminePilt) {
        number = (number + 1) % pildid.length;
    }

    eelminePilt = number;

    document.getElementById("randomPilt").src = pildid[number];
    document.getElementById("vastus").innerHTML = "Siia tuleb vastus";
    document.getElementById("vastus").style.color = "black";

    let valikud = document.getElementsByName("valik");

    for (let i = 0; i < valikud.length; i++) {
        valikud[i].checked = false;
    }
}

function radioValik() {
    let valikud = document.getElementsByName("valik");
    let pilt = document.getElementById("randomPilt").getAttribute("src");
    let vastus = document.getElementById("vastus");

    for (let i = 0; i < valikud.length; i++) {
        if (valikud[i].checked) {
            if (valikud[i].value === pilt) {
                vastus.innerHTML = "Õige vastus!";
                vastus.style.color = "green";
            } else {
                vastus.innerHTML = "Vale vastus!";
                vastus.style.color = "red";
            }
        }
    }
}

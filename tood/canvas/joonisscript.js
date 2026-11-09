//sirge joon
function sirgeJoon() {
    //määrame tahvli
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

//joon
        t.beginPath();
        t.strokeStyle = "red";
        t.lineWidth = 2;
        t.moveTo(50, 50); //algus
        t.lineTo(150, 200); //lõpp
        t.stroke();
    }
}

function puhasta() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.clearRect(0, 0, 300, 400);
    }
}
//kolmnurk
function kolmnurk() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
//kolmnurk
        t.beginPath();
        t.strokeStyle = "red";
        t.fillStyle = "green"; //taust
        t.lineWidth = 2;
        t.moveTo(50, 50); //alguspunkt
        t.lineTo(150, 200);
        t.lineTo(50, 200);
        t.lineTo(50, 50); //lõpppunkt
        t.stroke();
        t.fill();
    }
}
//ristkülik
function ristkylik() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        let laius = Number(document.getElementById("laius").value);
        let korgus = Number(document.getElementById("korgus").value);
        t.clearRect(0, 0, 300, 400);
        t.fillStyle = "olive";
        t.fillRect(100, 50, laius, korgus);
    }
}
//ring
function ring() {
    const tahvel = document.getElementById("tahvel");
    const r = document.getElementById("radius");
if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "green";
        t.beginPath();
        t.arc(150, 150, Number(r.value), 0, 2 * Math.PI);
        t.fill();
    }
}
//pea
function pea() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "yellow";
        t.arc(150, 170, 90, 0, 2 * Math.PI);
        t.fill();
    }
}
//2 silm
function paremSilm() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "black";
        t.arc(185, 145, 15, 0, 2 * Math.PI);
        t.fill();
    }
}
//1 silm
function vasakSilm() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "black";
        t.arc(120, 145, 11, 0, 2 * Math.PI);
        t.fill();
    }
}
//nina
function nina () {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        let laius = Number(document.getElementById("laius").value);
        let korgus = Number(document.getElementById("korgus").value);
        t.clearRect(0, 0, 300, 400);
        t.fillStyle = "olive";
        t.fillRect(100, 50, laius, korgus);
    }
}
//vasak kõrv
        function vasakKorv() {
            const tahvel = document.getElementById("tahvel");
            if (tahvel.getContext) {
                let t = tahvel.getContext("2d");
                t.fillStyle = "orange";
                t.fillRect(45, 150, 20, 45);
        }
 }
//parem kõrv
        function paremKorv() {
            const tahvel = document.getElementById("tahvel");
            if (tahvel.getContext) {
                let t = tahvel.getContext("2d");
                t.fillStyle = "orange";
                t.fillRect(235, 150, 20, 45);
       }
 }
//nina
function nina() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "orange";
        t.fillRect(145, 170, 10, 25);
    }
}

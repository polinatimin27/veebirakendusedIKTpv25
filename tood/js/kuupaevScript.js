
// Tänane kuupäev ja kellaaeg
function tanaOn() {
    let tana = new Date();

    let paev = tana.getDate();
    let kuu = tana.getMonth();
    let aasta = tana.getFullYear();

    console.log("Päev: " + paev);
    console.log("Kuu: " + kuu);
    console.log("Aasta: " + aasta);

    let kuupaev = tana.toLocaleDateString();
    let kellaaeg = tana.toLocaleTimeString();

    document.getElementById("vastus").innerHTML =
        "Kuupäev: " + kuupaev + "<br>" +
        "Kellaaeg: " + kellaaeg;
}

// Mitu päeva on sünnipäevani
function synnipaevani() {
    let sisend = document.getElementById("synnipaev").value;

    if (sisend === "") {
        document.getElementById("vastus").innerHTML =
            "Palun vali sünnikuupäev!";
        return;
    }

    let osad = sisend.split("-");
    let kuu = Number(osad[1]) - 1;
    let paev = Number(osad[2]);

    let tana = new Date();

    if (tana.getDate() === paev && tana.getMonth() === kuu) {
        document.getElementById("vastus").innerHTML =
            "Palju õnne sünnipäevaks!";
        return;
    }

    let synnipaev = new Date(tana.getFullYear(), kuu, paev);

    if (synnipaev < tana) {
        synnipaev = new Date(tana.getFullYear() + 1, kuu, paev);
    }

    let vahe = synnipaev.getTime() - tana.getTime();

    let paevad = Math.ceil(vahe / (1000 * 60 * 60 * 24));

    document.getElementById("vastus").innerHTML =
        "Sünnipäevani on jäänud " + paevad + " päeva";
}

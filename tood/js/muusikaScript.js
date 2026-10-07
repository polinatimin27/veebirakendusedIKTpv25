// Loeme valitud muusikastiilid.
function loeZanrid() {
    let zanrid = document.getElementsByName("zanr");
    let valitud = "";

    for (let i = 0; i < zanrid.length; i++) {
        if (zanrid[i].checked) {
            if (valitud !== "") {
                valitud += ", ";
            }

            valitud += zanrid[i].value;
        }
    }

    if (valitud === "") {
        valitud = "pole valitud";
    }

    document.getElementById("vastus1").textContent =
        "Sulle meeldib: " + valitud;

    return valitud;
}

// Loeme lemmikbändid või laulud.
function loeLemmikud() {
    let lemmikud = document.getElementById("lemmikud").value;

    document.getElementById("vastus2").textContent =
        "Sinu lemmikud: " + lemmikud;

    return lemmikud;
}

// Loeme, millal kasutaja muusikat kuulab.
function loeKuulamine() {
    let kuulamine = document.getElementById("kuulamine").value;

    document.getElementById("vastus3").textContent =
        "Sa kuulad muusikat: " + kuulamine;

    return kuulamine;
}

// Loeme kontserdi küsimuse vastuse.
function loeKontsert() {
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");
    let vastus = "pole valitud";

    if (jah.checked) {
        vastus = jah.value;
    } else if (ei.checked) {
        vastus = ei.value;
    }

    document.getElementById("vastus4").textContent =
        "Kontserdil käinud: " + vastus;

    return vastus;
}

// Loeme valitud muusikainstrumendi.
function loeInstrument() {
    let instrument = document.getElementById("instrument");
    let valitud = "pole valitud";

    if (instrument.selectedIndex !== 0) {
        valitud = instrument.value;
    }

    document.getElementById("vastus5").textContent =
        "Sinu valik: " + valitud;

    return valitud;
}

// Loeme liuguri väärtuse.
function loeTahtsus() {
    let tahtsus = document.getElementById("tahtsus").value;

    document.getElementById("vastus6").textContent =
        "Muusika tähtsus: " + tahtsus + " / 10";

    return tahtsus;
}

// Näitame kõiki vastuseid vormi all.
function naitaKokkuvote() {
    let zanrid = loeZanrid();
    let lemmikud = loeLemmikud();
    let kuulamine = loeKuulamine();
    let kontsert = loeKontsert();
    let instrument = loeInstrument();
    let tahtsus = loeTahtsus();

    document.getElementById("kokkuvote").textContent =
        "Kokkuvõte\n\n" +
        "Muusikastiilid: " + zanrid + "\n" +
        "Lemmikbändid või laulud: " + lemmikud + "\n" +
        "Muusika kuulamine: " + kuulamine + "\n" +
        "Kontserdil käinud: " + kontsert + "\n" +
        "Soovitud instrument: " + instrument + "\n" +
        "Muusika tähtsus: " + tahtsus + " / 10";
}

// Puhastame vastused ja taastame liuguri algväärtuse.
function puhastaVorm() {
    document.getElementById("kusimustik").reset();

    document.getElementById("vastus1").textContent = "";
    document.getElementById("vastus2").textContent = "";
    document.getElementById("vastus3").textContent = "";
    document.getElementById("vastus4").textContent = "";
    document.getElementById("vastus5").textContent = "";
    document.getElementById("vastus6").textContent =
        "Muusika tähtsus: 5 / 10";

    document.getElementById("kokkuvote").textContent = "";
}
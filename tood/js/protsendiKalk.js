
function protsendiKalk() {
    let arv = document.getElementById("arv").value;
    let protsent = document.getElementById("protsent").value;
    let tehe = document.getElementById("tehe").value;
    let vastus4 = document.getElementById("vastus4");

    if (tehe == "leia") {
        vastus4.innerHTML = "Vastus: " +
            (arv * protsent / 100).toFixed(2);
    }

    if (tehe == "lisa") {
        vastus4.innerHTML = "Vastus: " +
            (Number(arv) + arv * protsent / 100).toFixed(2);
    }

    if (tehe == "vahenda") {
        vastus4.innerHTML = "Vastus: " +
            (arv - arv * protsent / 100).toFixed(2);
    }
}

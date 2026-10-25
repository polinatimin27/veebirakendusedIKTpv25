
function tempTeisendus() {
    let vastus2 = document.getElementById("vastus2");
    let temp = document.getElementById("temp").value;
    const tempValik = document.getElementsByName("tempValik");

    for (let i = 0; i < tempValik.length; i++) {
        if (tempValik[i].checked) {
            if (tempValik[i].value === "celsius") {
                vastus2.innerHTML = temp + "°C = " +
                    (temp * 9 / 5 + 32).toFixed(2) + "°F";
            } else {
                vastus2.innerHTML = temp + "°F = " +
                    ((temp - 32) * 5 / 9).toFixed(2) + "°C";
            }
        }
    }
}

function minuNimi() {
    console.log("Pol");
}
minuNimi();
const nimi = () => {
    console.log("Pol");
};
nimi();



function kuupaevEesti(kuupaev) {
    let kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
    let osad = kuupaev.split(".");
    let kuu = kuud[Number(osad[1]) - 1];
    console.log(osad[0] + ". " + kuu + " 20" + osad[2]);
}
kuupaevEesti("19.07.25");

let liitmine = (a, b) => a +b;
console.log(liitmine(3, 5));



const array = [1, 2, 3, 4, 5];
array.forEach(element  => console.log(element));


let nimed = ["Kati", "Marta", "Andrei", "Jüri"];
nimed.forEach(function(nimi) {
    console.log(`<li>${nimi}</li>`);
});

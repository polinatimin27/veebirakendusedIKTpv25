function saiaKalk() {
    let vastus = document.getElementById("vastus");
    let saiatyyp = document.getElementById("saiatyyp");
    let kogus = document.getElementById("kogus");
    let pilt = document.getElementById("pilt");

    const juustu = 2.00;
    const mooni = 1.50;
    const pontsik = 3.00;
    const kaneeli = 1.30;

    if (saiatyyp.selectedIndex === 0) {
        vastus.innerHTML = "Palun vali saia tüüp!";
        vastus.style.color = "red";
        pilt.hidden = true;
    }

    if (saiatyyp.selectedIndex === 1) {
        // toFixed(2) - ümardab 2 kohta peale komat
        vastus.innerHTML =
            "Sa valisid " + saiatyyp.value + "<br>" +
            "Valitud kogus on " + kogus.value + "tk" + "<br>" +
            "Kokku hind on " + (mooni * kogus.value).toFixed(2) + "€";
        vastus.style.color = "black";
        pilt.src = "moonisai.jpg";
        pilt.hidden = false;
    }

    if (saiatyyp.selectedIndex === 2) {
        vastus.innerHTML =
            "Sa valisid " + saiatyyp.value + "<br>" +
            "Valitud kogus on " + kogus.value + "tk" + "<br>" +
            "Kokku hind on " + (juustu * kogus.value).toFixed(2) + "€";
        vastus.style.color = "black";
        pilt.src = "juustusai.jpg";
        pilt.hidden = false;
    }

    if (saiatyyp.selectedIndex === 3) {
        vastus.innerHTML =
            "Sa valisid " + saiatyyp.value + "<br>" +
            "Valitud kogus on " + kogus.value + "tk" + "<br>" +
            "Kokku hind on " + (pontsik * kogus.value).toFixed(2) + "€";
        vastus.style.color = "black";
        pilt.src = "pontsik.jpg";
        pilt.hidden = false;
    }

    if (saiatyyp.selectedIndex === 4) {
        vastus.innerHTML =
            "Sa valisid " + saiatyyp.value + "<br>" +
            "Valitud kogus on " + kogus.value + "tk" + "<br>" +
            "Kokku hind on " + (kaneeli * kogus.value).toFixed(2) + "€";
        vastus.style.color = "black";
        pilt.src = "kaneelisai.jpg";
        pilt.hidden = false;
    }
}
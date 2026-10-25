let raamat = {
    pealkiri: "Nullpunkt",
    autor: "Margus Karu",
    aasta: 2010,

    kirjeldus: function() {
        return this.pealkiri + " - " + this.autor + " (" + this.aasta + ")";
    },

    muudaAasta: function(uusAasta) {
        this.aasta = uusAasta;
    }
};

let raamatukogu = {
    raamatud: [
        raamat,
        { pealkiri: "Väike prints", autor: "Antoine de Saint-Exupéry", aasta: 1943 },
        { pealkiri: "Harry Potter", autor: "J. K. Rowling", aasta: 1997 }
    ],

    kuvaRaamatud: function() {
        for (let i = 0; i < this.raamatud.length; i++) {
            let r = this.raamatud[i];
            kuva(r.pealkiri + " - " + r.autor + " (" + r.aasta + ")");
        }
    },

    lisaRaamat: function(uusRaamat) {
        this.raamatud.push(uusRaamat);
    },

    raamatuteArv: function() {
        return this.raamatud.length;
    },

    peale2000: function() {
        let arv = 0;

        for (let i = 0; i < this.raamatud.length; i++) {
            if (this.raamatud[i].aasta > 2000) {
                arv++;
            }
        }
        return arv;
    },

    kuvaPealkirjad: function() {
        for (let i = 0; i < this.raamatud.length; i++) {
            kuva(this.raamatud[i].pealkiri);
        }
    }
};

function kuva(tekst) {
    console.log(tekst);
    document.getElementById("tulemus").innerHTML += tekst + "<br>";
}

function alusta() {
    console.log("NÄIDE 1 - OBJEKTI LOOMINE");
    console.log({
        pealkiri: raamat.pealkiri,
        autor: raamat.autor,
        aasta: raamat.aasta
    });

    console.log("NÄIDE 2 - MEETOD JA THIS");
    console.log(raamat.kirjeldus());

    console.log("NÄIDE 3 - AASTA MUUTMINE");
    raamat.muudaAasta(2011);
    console.log(raamat.aasta);

    console.log("NÄIDE 4 - OBJEKTIDE MASSIIV");
    console.log(raamatukogu.raamatud.map(r => r.pealkiri));

    console.log("NÄIDE 5 - PUSH");
    raamatukogu.lisaRaamat({
        pealkiri: "Näljamängud",
        autor: "Suzanne Collins",
        aasta: 2008
    });
    console.log(raamatukogu.raamatuteArv());

    console.log("NÄIDE 6 - PEALE 2000");
    console.log(raamatukogu.peale2000());

    console.log("NÄIDE 7 - MINU MEETOD");
    console.log(raamatukogu.raamatud.map(r => r.pealkiri));

    kuva("RAAMATU OBJEKT");
    kuva("Kirjeldus: Nullpunkt - Margus Karu (2010)");
    kuva("Muudetud aasta: " + raamat.kirjeldus());

    kuva("RAAMATUKOGU");
    kuva("Raamatud pärast lisamist:");
    raamatukogu.kuvaRaamatud();

    kuva("Raamatuid kokku: " + raamatukogu.raamatuteArv());
    kuva("Pärast 2000. aastat ilmunud raamatuid: " + raamatukogu.peale2000());

    kuva("Minu meetod - raamatute pealkirjad:");
    raamatukogu.kuvaPealkirjad();
}
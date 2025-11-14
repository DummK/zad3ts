type Ksiazka = {
    tytul: string,
    autor: string,
    ISBN: number,
    rokWydania: number,
    dostepnosc: "Dostepna" | "Niedostepna",
};
type Autor = {
    imie: string;
    nazwisko: string;
    dataUrodzenia: number;
    listaKsiazek: Ksiazka[];
};
type Czytelnik = {
    imie: string;
    nazwisko: string;
    dataUrodzenia: number;
    listaWypozyczonychKsiazek: Ksiazka[];
}
class ZbiorKsiazek {
    private tablicaAutorow: Autor[] = [];

    public DodajAutora(autor: Autor) {
        this.tablicaAutorow.push(autor);
    }

    public DodajKsiazke(ksiazka: Ksiazka, autor: Autor):void {
        if(this.tablicaAutorow.includes(autor)) {
            if(autor.imie === ksiazka.autor) {
                autor.listaKsiazek.push(ksiazka);
            }
            else {
                console.log("Imiona autora się nie pokrywają")
            }
        }
        else {
            console.log("Autor nie istnieje")
        }
    }
}
class Wypozyczenie {
    private zbiorKsiazek: ZbiorKsiazek;
    private dataWypozyczenia: number | undefined;
    private dataZwrotu: number | undefined;

    constructor( zbiorKsiazek: ZbiorKsiazek) {
        this.zbiorKsiazek = zbiorKsiazek;
    }

    public WypozyczKsiazke(ksiazka: Ksiazka, czytelnik:Czytelnik, dataWypoczyczenia: number, dataZwrotu: number):void {
        if(ksiazka.dostepnosc == "Dostepna") {
            czytelnik.listaWypozyczonychKsiazek.push(ksiazka);
            this.dataWypozyczenia = dataWypoczyczenia;
            this.dataZwrotu = dataZwrotu;
        }
        else {
            console.log("Ksiazka niedostepna");
        }
    }

    public Raport(czytelnik: Czytelnik) {
        console.log("Raport");
        for (let i = 0; i < czytelnik.listaWypozyczonychKsiazek.length; i++) {
            console.log(czytelnik.listaWypozyczonychKsiazek[i]);
        }
    }
}

let zbior1:ZbiorKsiazek = new ZbiorKsiazek();
let czytelnik1: Czytelnik = {
    imie: "Bartosz",
    nazwisko: "Kostrubiec",
    dataUrodzenia: 19082001,
    listaWypozyczonychKsiazek: []
}
let autor1:Autor = {
    imie: "Jan",
    nazwisko: "Kostrubiec",
    dataUrodzenia: 19081890,
    listaKsiazek: []
}
let ksiazka1:Ksiazka = {
    tytul: "Barbarzyncy - kostrubiec",
    autor: "Jan",
    ISBN: 3425325324523,
    rokWydania: 11031930,
    dostepnosc: "Dostepna",
}
let ksiazka2:Ksiazka = {
    tytul: "KAKAKAKAKA - kostrubiec",
    autor: "Jan",
    ISBN: 43564534563,
    rokWydania: 11031530,
    dostepnosc: "Dostepna",
}

let wypozyczenie1:Wypozyczenie = new Wypozyczenie(zbior1);

zbior1.DodajAutora(autor1);
zbior1.DodajKsiazke(ksiazka1, autor1);
zbior1.DodajKsiazke(ksiazka2, autor1);

wypozyczenie1.WypozyczKsiazke(ksiazka1, czytelnik1, 11022087, 13022087);
wypozyczenie1.WypozyczKsiazke(ksiazka2, czytelnik1, 11022037, 13022037);

wypozyczenie1.Raport(czytelnik1);


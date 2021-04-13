// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:


// Naplním si osudí pomocí cyklu for
let osudi = [];

for (let i = 1; i <= 48; i++) {
    osudi.push(i);
}

// Vytáhnu 7 náhodných čísel
let tazenaCisla = [];

for (let i = 0; i <= 6; i++) {
    let vyherniIndex = Math.floor(Math.random() * osudi.length);
    let vyherniCislo = osudi[vyherniIndex];

    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex, 1);
}

// Vypíšu si do HTML
let vyherniCisla = document.querySelector('#vyherni-cisla');

for (let i = 0; i < tazenaCisla.length; i++) {
    vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[i] + '</span>';
}
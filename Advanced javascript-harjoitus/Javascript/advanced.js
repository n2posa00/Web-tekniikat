// Tekijä: Samuli Pohjola

// Haetaan tarvittavat elementit sivulta
let name1 = document.querySelector("#name1");

let note = document.querySelector("#note"); 

let important = document.querySelector("#important"); 

let output = document.querySelector("#output");

// Haetaan nykyinen vuosi, kuukausi ja päivä
let date = new Date();

let currentYear = date.getFullYear();

let currentMonth = date.getMonth() + 1;

let currentDay = date.getDate();

// Luodaan laskuri, jota käytetään uusien divien luonnissa
let i = 0;

// Haetaan nappi sivulta ja asetetaan sille kuuntelija
let button1 = document.querySelector("#button1");

button1.addEventListener("click", addNote)

function addNote(e) {

// Estetään sivua lataamasta uudelleen nappia painaessa
    e.preventDefault();

// Kasvatetaan laskurin lukua 
    i++;

//  Tarkistetaan, että tekstikenttiin on laitettu jotain
    if (name1.value == "") {
        return;
    }

    if (note.value == "") {
        return;
    }

// Luodaan uusi divi, luodaan sille luokka ja laitetaan se sivulle
    let newDiv = document.createElement("div");

    newDiv.className = "entry" + [i]; 

    output.appendChild(newDiv);

    let entry = document.querySelector(".entry" + [i]);

//  Jos checkboxi on checkattu, asetetaan luodulle diville id, jonka avulla voidaan vaihtaa sen muotoilua 
    if (important.checked == true) {
        entry.setAttribute("id", "veryImportant")
    }

// Luodaan uusi h4-elementti, jonka sisältö saadaan nimikentästä ja joka laitetaan luodun divin sisälle
    let newH4 = document.createElement("h4");

    newH4.textContent = currentDay + "." + currentMonth + "." + currentYear + " " + "(" + name1.value + ")";

    entry.appendChild(newH4);

// Luodaan uusi p-elementti, jonka sisältö saadaan tekstialueelta ja joka laitetaan luodun divin sisälle
    let newP = document.createElement("p");

    newP.textContent = note.value;

    entry.appendChild(newP);

}

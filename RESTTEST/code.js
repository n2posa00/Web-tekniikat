
getData();
// Ei jäädä odottamaan
// Tehdään jotain muutaa, lisätään vaikka elementtejä sivulle


async function getData() {
    const response = await fetch('https://random-data-api.com/api/v2/appliances?size=80');
    const laitteet = await response.json();

    for (laite of laitteet) {
        let h = document.createElement("h4");
        h.textContent = laite.equipment;
        document.body.appendChild(h);
    }
}
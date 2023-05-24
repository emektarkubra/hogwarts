function getData(url) {

    let promise = new Promise((resolve, reject) => {

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((spells) => {
                resolve(spells);
            })
            .catch((err) => {
                reject(err);
            })

    })
    return promise;
}

getData("https://hp-api.onrender.com/api/spells")
    .then((spells) => {
        createSpells(spells);
    })
    .catch((err) => {
        console.log(err);
    })


function createSpells(spells) {
    spells.forEach(spell => {

        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";

        const spellName = document.createElement("div");
        spellName.className = "spell-name";
        spellName.textContent = spell.name;
        spellName.setAttribute("spellId", spell.id);

        const tooltipText = document.createElement("span");
        tooltipText.className = "tooltiptext";
        tooltipText.textContent = spell.description;

        const container = document.querySelector(".container");
        tooltip.appendChild(spellName);
        tooltip.appendChild(tooltipText);
        container.appendChild(tooltip);
    });
}
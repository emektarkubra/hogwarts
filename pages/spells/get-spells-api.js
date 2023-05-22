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
        // console.log(spells);
        createSpells(spells);
    })
    .catch((err) => {
        console.log(err);
    })

function createSpells(spells) {

    spells.forEach(spell => {
        const container = document.querySelector(".container");
        let spellBox = document.createElement("div");
        spellBox.className = "spell-name";
        spellBox.textContent = spell.name;
        container.appendChild(spellBox);



        spellBox.addEventListener("click", (e) => {
            const tooltipBox = document.createElement("div");
            tooltipBox.className = "tooltip";

            const a = document.createElement("a");
            a.href = "#";

            const closeIcon = document.createElement("i");
            closeIcon.className = "fa fa-close";

            const description = document.createElement("p");
            description.className = "spell-desciption";
            description.textContent = spell.description;

            tooltipBox.appendChild(a);
            a.appendChild(closeIcon);
            tooltipBox.appendChild(description);
            document.body.appendChild(tooltipBox);



            closeIcon.addEventListener("click", (e) => {
                tooltipBox.remove();
            })

        })







    });
}
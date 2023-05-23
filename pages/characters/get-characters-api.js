function getData(url) {

    let promise = new Promise((resolve, reject) => {

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
    })
    return promise;
}


getData(`https://hp-api.onrender.com/api/characters`)
    .then((characters) => {
        createCharacter(characters);
    })
    .catch((err) => {
        console.log(err);
    })


function createCharacter(characters) {
    characters.forEach(character => {

        if (character.wizard) {
            character.wizard = `✓`;
        } else {
            character.wizard = `X`;
        }

        if (character.hogwartsStudent) {
            character.hogwartsStudent = `✓`;
        } else {
            character.hogwartsStudent = `X`;
        }

        if (character.alive) {
            character.alive = `✓`;
        } else {
            character.alive = `X`;
        }

        if (character.alternate_names.length == 0) {
            character.alternate_names = "—";
        }
        if (character.dateOfBirth == null) {
            character.dateOfBirth = "—";
        }
        if (character.ancestry == "") {
            character.ancestry = "—";
        }

        if (character.eyeColour == "") {
            character.eyeColour = "—";
        }
        if (character.hairColour == "") {
            character.hairColour = "—";
        }
        if (character.wand.wood == "") {
            character.wand.wood = "—";
        }
        if (character.patronus == "") {
            character.patronus = "—";
        }
        if (character.actor == "") {
            character.actor = "—";
        }
        if (character.house == "") {
            character.house = "—";
        }

        const cardBody = document.querySelector(".card-body");

        const characterBox = document.createElement("div");
        characterBox.className = "character";

        const characterName = document.createElement("h3");
        characterName.className = "name";
        characterName.textContent = character.name;

        const imgBox = document.createElement("div");
        imgBox.className = "imgBox";
        imgBox.setAttribute("characterId", `${character.id}`)

        const img = document.createElement("img");
        img.className = "img";
        img.src = character.image;
        if (character.image == "") {
            img.src = "/img/poster.jpg";
        }
        img.alt = "Image not found";

        cardBody.appendChild(characterBox);
        characterBox.appendChild(characterName);
        characterBox.appendChild(imgBox);
        imgBox.appendChild(img);

        imgBox.addEventListener("click", createTooltip);

        function createTooltip(e) {

            const characterTooltip = document.createElement("div");
            characterTooltip.className = "character-tooltip";

            const tooltipHeader = document.createElement("div");
            tooltipHeader.className = "tooltip-header";

            const tooltipName = document.createElement("h1");
            tooltipName.className = "tooltip-name";
            tooltipName.textContent = character.name;

            const tooltipImgBox = document.createElement("div");
            tooltipImgBox.className = "tooltip-imgBox";

            const tooltipImg = document.createElement("img");
            tooltipImg.className = "tooltip-img";
            tooltipImg.src = character.image;
            if (character.image == "") {
                tooltipImg.src = "/img/poster.jpg";
            }
            tooltipImg.alt = "image not found";

            const verticalLine = document.createElement("div");
            verticalLine.className = "vertical-line";

            const tooltipInformation = document.createElement("div");
            tooltipInformation.className = "tooltip-information";

            const inform1 = document.createElement("div");
            inform1.className = "inform1";
            inform1.innerHTML = `

            <table>
                    <tr>
                        <td>Alternate-name:</td>
                        <td>${character.alternate_names}</td>
                    </tr>
                    <tr>
                        <td>Species:</td>
                        <td>${character.species}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>${character.gender}</td>
                    </tr>
                    <tr>
                        <td>House:</td>
                        <td>${character.house}</td>
                    </tr>
                    <tr>
                        <td>Birthday:</td>
                        <td>${character.dateOfBirth}</td>
                    </tr>
                    <tr>
                        <td>Wizard:</td>
                        <td>${character.wizard}</td>
                    </tr>
                    <tr>
                        <td>Ancestry:</td>
                        <td>${character.ancestry}</td>
                    </tr>
                </table>
            
            
            `

            const inform2 = document.createElement("div");
            inform2.className = "inform2";
            inform2.innerHTML = `

            <table>
                    <tr>
                        <td>Eye-color:</td>
                        <td>${character.eyeColour}</td>
                    </tr>
                    <tr>
                        <td>Hair-color:</td>
                        <td>${character.hairColour}</td>
                    </tr>
                    <tr>
                        <td>Wand-wood:</td>
                        <td>${character.wand.wood}</td>
                    </tr>
                    <tr>
                        <td>Patronus:</td>
                        <td>${character.patronus}</td>
                    </tr>
                    <tr>
                        <td>Hogwarts-student:</td>
                        <td>${character.hogwartsStudent}</td>
                    </tr>
                    <tr>
                        <td>Actor:</td>
                        <td>${character.actor}</td>
                    </tr>
                    <tr>
                        <td>Alive:</td>
                        <td>${character.alive}</td>
                    </tr>

                </table>
            
            `

            const houseBox = document.createElement("div");
            houseBox.className = "house";

            const houseImg = document.createElement("img");
            houseImg.className = "house-img";
            houseImg.alt = "image not found";
            if (character.house == "Gryffindor") {
                houseImg.src = "/img/gryffindor.jpg";
            } else if (character.house == "Slytherin") {
                houseImg.src = "/img/slytherin.jpg"
            } else if (character.house == "Hufflepuff") {
                houseImg.src = "/img/hufflepuff.webp";
            } else if (character.house == "Ravenclaw") {
                houseImg.src = "/img/ravenclaw.webp";
            } else {
                houseImg.src = "/img/houses.webp";
            }

            document.body.appendChild(characterTooltip);
            characterTooltip.appendChild(tooltipHeader);
            tooltipHeader.appendChild(tooltipName);
            tooltipHeader.appendChild(tooltipImgBox);
            tooltipImgBox.appendChild(tooltipImg);
            characterTooltip.appendChild(verticalLine);
            characterTooltip.appendChild(tooltipInformation);
            tooltipInformation.appendChild(inform1);
            tooltipInformation.appendChild(inform2);
            tooltipInformation.appendChild(houseBox);
            houseBox.appendChild(houseImg);


            characterTooltip.addEventListener("click", removeTooltip);

            function removeTooltip(e) {
                characterTooltip.remove();

            }


        }


        const filterInput = document.querySelector("#filter-input");
        filterInput.addEventListener("keyup", filterStudent);

        function filterStudent(e) {
            filterName = e.target.value.toLowerCase().trim();
            if ((character.name.toLowerCase().trim()).includes(filterName)) {
                characterBox.setAttribute("style", "display:flex");
            } else {
                characterBox.setAttribute("style", "display:none");
            }
        }

    });

}
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
        console.log(characters);
        createCharacter(characters);
    })
    .catch((err) => {
        console.log(err);
    })


function createCharacter(characters) {
    characters.forEach(character => {
        const characterBox = document.createElement("div");
        characterBox.className = "character";

        const name = document.createElement("h1");
        name.className = "name";
        name.textContent = character.name;

        const imgBox = document.createElement("div");
        imgBox.className = "imgBox";

        const img = document.createElement("img");
        img.className = "img";
        img.src = character.image;
        img.alt = "Image not found"

        const verticalLine = document.createElement("div");
        verticalLine.className = "vertical-line";


        const inform1 = document.createElement("div");
        inform1.className = "inform1";


        inform1.innerHTML =
            `
        <table>
        <tr>
            <td>Alternate-name:</td>
            <td>${character.alternate_names}</td>
        </tr>
        <tr>
            <td>Species</td>
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
            <td>Wizard</td>
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
        <table class="table-1">
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
            <td>
            ${character.wand.wood} <br>
            </td>
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
        const house = document.createElement("div");
        house.className = "house";
        const houseImg = document.createElement("img");
        houseImg.className = "house-img";
        if (character.house == "Gryffindor") {
            houseImg.src = "img/Gryffindor.jpg"
        } else if (character.house == "Slytherin") {
            houseImg.src = "img/Slytherin.jpg";
        } else if (character.house == "Hufflepuff") {
            houseImg.src = "img/Hufflepuff.webp";
        } else if (character.house == "Ravenclaw") {
            houseImg.src = "img/Ravenclaw.webp";
        }

        const cardBody = document.querySelector(".card-body");
        cardBody.appendChild(characterBox);
        characterBox.appendChild(name);
        characterBox.appendChild(imgBox);
        imgBox.appendChild(img);
        characterBox.appendChild(verticalLine);
        characterBox.appendChild(inform1);
        characterBox.appendChild(inform2);
        characterBox.appendChild(house);
        house.appendChild(houseImg);


    });
}
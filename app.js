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


getData(`https://hp-api.onrender.com/api/characters/students`)
    .then((students) => {
        createCharacter(students);
    })
    .catch((err) => {
        console.log(err);
    })


function createCharacter(students) {
    students.forEach(student => {

        if (student.wizard) {
            student.wizard = `✓`;
        } else {
            student.wizard = `X`;
        }

        if (student.hogwartsStudent) {
            student.hogwartsStudent = `✓`;
        } else {
            student.hogwartsStudent = `X`;
        }

        if (student.alive) {
            student.alive = `✓`;
        } else {
            student.alive = `X`;
        }

        if (student.alternate_names.length == 0) {
            student.alternate_names = "—";
        }
        if (student.dateOfBirth == null) {
            student.dateOfBirth = "—";
        }
        if (student.ancestry == "") {
            student.ancestry = "—";
        }

        if (student.eyeColour == "") {
            student.eyeColour = "—";
        }
        if (student.hairColour == "") {
            student.hairColour = "—";
        }
        if (student.wand.wood == "") {
            student.wand.wood = "—";
        }
        if (student.patronus == "") {
            student.patronus = "—";
        }
        if (student.actor == "") {
            student.actor = "—";
        }
        if (student.house == "") {
            student.house = "—";
        }

        const cardBody = document.querySelector(".card-body");

        const characterBox = document.createElement("div");
        characterBox.className = "character";

        const a = document.createElement("a");
        a.href = "#";

        const icon = document.createElement("i");
        icon.className = "fa fa-th-large";

        const characterName = document.createElement("h1");
        characterName.className = "name";
        characterName.textContent = student.name;

        const imgBox = document.createElement("div");
        imgBox.className = "imgBox";

        const img = document.createElement("img");
        img.className = "img";
        img.src = student.image;
        if (student.image == "") {
            img.src = "img/poster.jpg";
        }
        img.alt = "Image not found";

        cardBody.appendChild(characterBox);
        characterBox.appendChild(a);
        a.appendChild(icon);
        characterBox.appendChild(characterName);
        characterBox.appendChild(imgBox);
        imgBox.appendChild(img);

        icon.addEventListener("click", createTooltip);


        function createTooltip(e) {

            const characterTooltip = document.createElement("div");
            characterTooltip.className = "character-tooltip";

            const tooltipHeader = document.createElement("div");
            tooltipHeader.className = "tooltip-header";

            const tooltipName = document.createElement("h1");
            tooltipName.className = "tooltip-name";
            tooltipName.textContent = student.name;

            const tooltipImgBox = document.createElement("div");
            tooltipImgBox.className = "tooltip-imgBox";

            const tooltipImg = document.createElement("img");
            tooltipImg.className = "tooltip-img";
            tooltipImg.src = student.image;
            if (student.image == "") {
                tooltipImg.src = "img/poster.jpg";
            }
            tooltipImg.alt = "Image not found";

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
                        <td>${student.alternate_names}</td>
                    </tr>
                    <tr>
                        <td>Species</td>
                        <td>${student.species}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>${student.gender}</td>
                    </tr>
                    <tr>
                        <td>House:</td>
                        <td>${student.house}</td>
                    </tr>
                    <tr>
                        <td>Birthday:</td>
                        <td>${student.dateOfBirth}</td>
                    </tr>
                    <tr>
                        <td>Wizard</td>
                        <td>${student.wizard}</td>
                    </tr>
                    <tr>
                        <td>Ancestry:</td>
                        <td>${student.ancestry}</td>
                    </tr>
                </table>
            
            
            `

            const inform2 = document.createElement("div");
            inform2.className = "inform2";
            inform2.innerHTML = `

            <table>
                    <tr>
                        <td>Eye-color:</td>
                        <td>${student.eyeColour}</td>
                    </tr>
                    <tr>
                        <td>Hair-color:</td>
                        <td>${student.hairColour}</td>
                    </tr>
                    <tr>
                        <td>Wand-wood:</td>
                        <td>${student.wand.wood}</td>
                    </tr>
                    <tr>
                        <td>Patronus:</td>
                        <td>${student.patronus}</td>
                    </tr>
                    <tr>
                        <td>Hogwarts-student:</td>
                        <td>${student.hogwartsStudent}</td>
                    </tr>
                    <tr>
                        <td>Actor:</td>
                        <td>${student.actor}</td>
                    </tr>
                    <tr>
                        <td>Alive:</td>
                        <td>${student.alive}</td>
                    </tr>

                </table>
            
            `

            const houseBox = document.createElement("div");
            houseBox.className = "house";

            const houseImg = document.createElement("img");
            houseImg.className = "house-img";
            houseImg.alt = "Image not found";
            if (student.house == "Gryffindor") {
                houseImg.src = "img/gryffindor.jpg";
            } else if (student.house == "Slytherin") {
                houseImg.src = "img/slytherin.jpg"
            } else if (student.house == "Hufflepuff") {
                houseImg.src = "img/hufflepuff.webp";
            } else if (student.house == "Ravenclaw") {
                houseImg.src = "img/ravenclaw.webp";
            } else {
                houseImg.src = "img/houses.webp";
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


            document.addEventListener("keyup", removeTooltip);

            function removeTooltip(e) {
                characterTooltip.remove();
            }


        }



    });



}
let data = {
    1: `Just like Hermione Granger, you were ultimately placed in Gryffindor,
    but the Sorting Hat seriously considered putting you in Ravenclaw. You are a natural 
    born leader, often taking control of the reins from others whose recklessness or dedication 
    to facts and knowledge clouds their judgment. You are intelligent, but acknowledge that 
    there are more important things in life, and therefore aim to use your intelligence and 
    determination to fight for what you believe to be right.

    Your slightly compatibility with Hufflepuff house suggests a deep love and appreciation  for those 
    close to you, which toy may keep hidden for fear of being hurt.`,

    2: `Your Slytherin ambition combined with a typically Ravenclaw-esque thirst 
    for wisdom means you are destined to go far in life. People often consider you to be aloof and 
    unapproachable-and they may actually be right - as your passion for knowledge and success far 
    outweighs your need for close relationships. For you, true friendships are rare, but you are smart 
    enough to hold onto those you deem worthy of your affection. 
    
    Your slight compatibility with Gryffindor house hints at an underlying desire for adventure that 
    may manifet itself in a love of travel or trying new things.`,

    3: `You believe above all in the importance of wisdom, which is why you undoubtedly 
    belong in Ravenclaw, but your sense of adventure means you may also have an affinity for Gryffindor house. 
    You are a thrill-seeker- you love to travel and there's nothing more exciting to you than new experiences - 
    and believe that adventure is essential in the pursuit of knowledge. You are brave, but would never intentionally 
    put yourself in danger, placing you firmly in Ravenclaw.

    Your slight compatibility with Hufflepuff hpuse suggests a deep love and appreciation for those close to you, 
    which you may keep hidden for fear of being hurt.
    `,

    4: `You're undeniably a Hufflepuff, but you definitely have some strong Gryffindor 
    qualities. You prodly wear your heart on your sleeve, but you lack the recklessness of a true 
    Gryffindor, which means that you don't act on your feelings without thinking. Your kindness and 
    openness is what originally attracts other people to you, but they stay for your unwavering loyalty, 
    meaning you're constantly surrounded by a large group of friends.
    
    Your slight compatibility with Ravenclaw house hints at an appreciation for knowledge and wisdom, through 
    they are not priorities for you.`
}


let x = Math.floor(Math.random() * 4) + 1;


const house = document.querySelector(".sorting");

house.addEventListener("click", sortingHat);

function sortingHat(e) {

    const container = document.querySelector(".container");
    container.remove();

    const audio = document.querySelector(".sorting-ceremony");
    audio.remove();

    const houseContainer = document.createElement("div");
    houseContainer.className = "house-container";

    const houseBox = document.createElement("div");
    houseBox.className = "house";

    const img = document.createElement("img");
    img.alt = "image not found";

    const descriptionBox = document.createElement("div");
    descriptionBox.className = "description";

    const title = document.createElement("h4");
    if (x == 1) {
        img.src = "/img/Gryffindor2.jpg";
        title.textContent = "GRYFFINDOR";
        title.style.color = "red";
        title.style.textShadow = "1px 1px 8px red";
    } else if (x == 2) {
        img.src = "/img/Slytherin2.jpg";
        title.textContent = "SLYTHERIN"
        title.style.color = "green";
        title.style.textShadow = "1px 1px 8px green";
    } else if (x == 3) {
        img.src = "/img/ravenclaw2.png";
        title.textContent = "RAVENCLAW"
        title.style.color = "blue";
        title.style.textShadow = "1px 1px 8px blue";
    } else {
        img.src = "/img//Hufflepuff2.png";
        title.textContent = "HUFFLEPUFF";
        title.style.color = "yellow";
        title.style.textShadow = "1px 1px 8px yellow";
    }

    const text = document.createElement("p");
    text.textContent = data[x];

    document.body.appendChild(houseContainer);
    houseContainer.appendChild(houseBox);
    houseBox.appendChild(img);
    houseContainer.appendChild(descriptionBox);
    descriptionBox.appendChild(title);
    descriptionBox.appendChild(text);



}
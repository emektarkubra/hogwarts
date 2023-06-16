#  🏰 HOGWARTS
***
#  Expecto-Patronum! ⚡️

> "Hogwarts" project displays data from HP-API. The users are able to search the Harry Potter characters, spells and see their list. By clicking on a particular character or hovering on a spell name, it is possible to read more details about it. Also users are randomly placed in the appropriate house by the Sorting Hat! The project is implemented using pure JavaScript. Does not include any frameworks or libraries.

<video src="https://github.com/emektarkubra/hogwarts/assets/124355274/d49fb729-c876-44da-942b-d87d238c8560" controls="controls" >
</video>

***

## 🛠️ Built With

<img src="https://user-images.githubusercontent.com/114678694/193994738-32684660-7d82-48d5-8f5d-1f428fda1853.svg" width = "300px">


## 👩‍🎤 Harry Potter API

A Harry Potter Rest API that returns information about characters and spells and their description. 

Visit the main page of this API (that comes by default with json-server): 
https://hp-api.onrender.com/api/

>No API key is required.

### Endpoints

* all characters:
https://hp-api.onrender.com/api/characters

* a specific character, based on their unique ID:
https://hp-api.onrender.com/api/character/:id

* characters who are Hogwarts students during the book series:
https://hp-api.onrender.com/api/characters/students

* characters who are Hogwarts staff during the book series:
https://hp-api.onrender.com/api/characters/staff

* characters in a certain house, e.g. /gryffindor:
https://hp-api.onrender.com/api/characters/house/:house

* all spells:
https://hp-api.onrender.com/api/spells



### How to use

Here is a JavaScript example of fetching the entire API. Just change the URL or  endpoint for fetching different APIs

```javascript

function getData(url) {

    return new Promise((resolve, reject) => {

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
}


getData(`https://hp-api.onrender.com/api/characters`)
    .then((characters) => {
        console.log(characters)
    })
    .catch((err) => {
        console.log(err);
    })


```



## 🚀 Getting Started


There are no prerequisites for this project.

Clone Repository using;
```javascript
git clone git@github.com:emektarkubra/hogwarts.git
```
or
```javascript
git clone https://github.com/emektarkubra/hogwarts.git
```
After clone, open home.html in your extended browser.

## 👷‍♀️ Authors
#### Kübra Emektar
Github : [@github](https://github.com/emektarkubra)
Linkedln : [Linkedln](https://www.linkedin.com/in/kübra-emektar-184103267/)


## 🙋‍♀️ Show your support
Give a ⭐️ if you like this project!

***

> It is our choices, Harry, that show what we truly are, far more than our abilities. 
– Harry Potter and the Chamber of Secrets –

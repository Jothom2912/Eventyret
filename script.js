"use strict";

window.addEventListener("load", start);

function start() {
    console.log("Adventure game starting");
    registerButtonClick();
    currentScene = scene0;
    showScene(currentScene);
    connectNodes();
}

let currentScene;

function registerButtonClick() {
    document.querySelector("main").addEventListener("click", userClicked);
}

function userClicked(event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
        buttonClicked(target);
    }
}

function buttonClicked(button) {
    button.parentElement.remove();

    const index = Number(button.id.substring(15)); // Extract index from button id
    const choice = currentScene.choices[index];

    currentScene = choice.node;
    showScene(currentScene);
}

const scene0 = {
    title: "Skovens Begyndelse",
    text: `<p>Du står ved indgangen til en mystisk skov. To stier strækker sig foran dig - en til højre badet i et svagt månelys, en til venstre mørknet af tætte grene.</p>`,
    choices: [
        {
            name: "(1) Tag stien til højre",
            node: null  // Initially null, will be updated in connectNodes
        },
        {
            name: "(2) Tag stien til venstre",
            node: null  // Initially null, will be updated in connectNodes
        }
    ]
};

const scene01 = {
    title: "Skovvogteren",
    text: `<p>En gammel skovvogter med grå øjne træder frem. Hans kappe er vævet med mystiske runer, og han holder en krokket stav.</p>`,
    choices: [
        {
            name: "(1) Lyt til skovvogterens historie",
            node: null  // Initially null, will be updated in connectNodes
        },
        {
            name: "(2) Ignorer ham og fortsæt",
            node: null  // Initially null, will be updated in connectNodes
        }
    ]
};

const sceneDeath1 = {
    title: "Farlig Beslutning",
    text: `<p>Du ignorerede skovvogterens advarsel og fortsatte blindt. En skygge opsluger dig, og du dør øjeblikkeligt.</p>`,
    choices: [
        {
            name: "(1) Start spillet forfra",
            node: scene0
        },
        {
            name: "(2) Start spillet forfra",
            node: scene0
        }
    ]
};

const sceneDeath2 = {
    title: "Skæbnesvanger Tvivl",
    text: `<p>Din tøven kostede dig livet. En usynlig kraft trækker dig ned i mørket.</p>`,
    choices: [
        {
            name: "(1) Start spillet forfra",
            node: scene0
        },
        {
            name: "(2) Start spillet forfra",
            node: scene0
        }
    ]
};

const sceneDeath3 = {
    title: "Farlig Vej",
    text: `<p>Din uklogelige rute førte dig direkte i en dødbringende fælde. Skoven har taget dig.</p>`,
    choices: [
        {
            name: "(1) Start spillet forfra",
            node: scene0
        },
        {
            name: "(2) Start spillet forfra",
            node: scene0
        }
    ]
};

const sceneDeath4 = {
    title: "Sidste Fejltrin",
    text: `<p>Et øjeblik af tøven blev din skæbne. Du dør alene i skovens mørke.</p>`,
    choices: [
        {
            name: "(1) Start spillet forfra",
            node: scene0
        },
        {
            name: "(2) Start spillet forfra",
            node: scene0
        }
    ]
};

const sceneDeath5 = {
    title: "Skovens Dom",
    text: `<p>Du vendte om for tidligt. Skoven accepterer ikke svage vandrer.</p>`,
    choices: [
        {
            name: "(1) Start spillet forfra",
            node: scene0
        },
        {
            name: "(2) Start spillet forfra",
            node: scene0
        }
    ]
};

const sceneDeath6 = {
    title: "Ubeslutsomhedens Pris",
    text: `<p>Din tøven blev din undergang. Skoven lukker sig om dig.</p>`,
    choices: [
        {
            name: "(1) Start spillet forfra",
            node: scene0
        },
        {
            name: "(2) Start spillet forfra",
            node: scene0
        }
    ]
};

const scene111 = {
    title: "Skovens Hemmelighed",
    text: `<p>Skovvogteren fortæller om en gammel profeti om en vandrer, der skal finde tre magiske genstande for at genoprette skovens balance.</p>`,
    choices: [
        {
            name: "(1) Accepter opdraget",
            node: null  // Initially null, will be updated in connectNodes
        },
        {
            name: "(2) Afvis opdraget",
            node: null  // Initially null, will be updated in connectNodes
        }
    ]
};

const scene211 = {
    title: "Farens Time",
    text: `<p>Du kommer til et kritisk punkt i rejsen. En smal sti snor sig langs en afgrund.</p>`,
    choices: [
        {
            name: "(1) Gå videre langs stien",
            node: null  // Initially null, will be updated in connectNodes
        },
        {
            name: "(2) Søg en anden vej",
            node: null  // Initially null, will be updated in connectNodes
        }
    ]
};

const scene311 = {
    title: "Afgørende Øjeblik",
    text: `<p>Du når et vendepunkt. Foran dig ligger en gammel stenportal overdækket af mørke ranker.</p>`,
    choices: [
        {
            name: "(1) Gå gennem portalen",
            node: null  // Initially null, will be updated in connectNodes
        },
        {
            name: "(2) Se dig om efter en anden vej",
            node: null  // Initially null, will be updated in connectNodes
        }
    ]
};

const scene02 = {
    title: "Den Mørke Sti",
    text: `<p>Du vælger stien til venstre. Grenene danner en næsten uigennemtrængelig tunnel.</p>`,
    choices: [
        {
            name: "(1) Bevæg dig dybere ind",
            node: null  // Initially null, will be updated in connectNodes
        },
        {
            name: "(2) Vend om mod lysningen",
            node: null  // Initially null, will be updated in connectNodes
        }
    ]
};

const scene121 = {
    title: "Skovens Dyb",
    text: `<p>Du finder en gammel stenportal delvist skjult af efeu. En svag blå lysning skinner gennem revnerne.</p>`,
    choices: [
        {
            name: "(1) Undersøg portalen",
            node: null  // Initially null, will be updated in connectNodes
        },
        {
            name: "(2) Fortsæt forbi",
            node: null  // Initially null, will be updated in connectNodes
        }
    ]
};

const scene221 = {
    title: "Magisk Portal",
    text: `<p>Portalen åbner sig langsomt, og du ser en ny verden bag den. Du tager skridtet fremad...</p>`,
    choices: [
        {
            name: "(1) Gå videre",
            node: scene0 // Restart the game
        }
    ]
};

function connectNodes() {
    scene0.choices[0].node = scene01;
    scene0.choices[1].node = scene02;

    scene01.choices[0].node = scene111;
    scene01.choices[1].node = sceneDeath1;
    scene111.choices[0].node = scene211;
    scene111.choices[1].node = sceneDeath2;
    scene211.choices[0].node = scene311;
    scene211.choices[1].node = sceneDeath3;
    scene311.choices[0].node = scene221;
    scene311.choices[1].node = sceneDeath4;

    scene02.choices[0].node = scene121;
    scene02.choices[1].node = sceneDeath5;
    scene121.choices[0].node = scene221;
    scene121.choices[1].node = sceneDeath6;
}

function showScene(scene) {
    const html = `
    <div class="scene">
        <h2>${scene.title}</h2>
        <div class="text">
            ${scene.text}
        </div>
        <div class="choices">
            ${scene.choices.map((choice, i) => `<button id="btn-choice${i}">${choice.name}</button>`).join(" ")}
        </div>
    </div>`;

    document.querySelector("main").innerHTML = html;
}

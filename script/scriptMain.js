
// function for opening all the modals
const openButtons = document.querySelectorAll('.openSpellModal');

openButtons.forEach(button => {
    button.addEventListener('click', () => {

        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        
        modal.showModal();

    });
});

// function for closing all the modals

const closeButtons = document.querySelectorAll('.closeSpellModal');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {

        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.close();

    });
});

// function for adding a spell into the known spell list

const spellName = {
    "maosMagicas": "Mão Mágicas",
    "protecaoContraLaminas": "Proteção Contra Láminas" 
};

const addButtons = document.querySelectorAll('.addSpell');
const cantripsList = document.getElementById("cantripsList");

addButtons.forEach(button => {
    button.addEventListener('click', () => {

        const spellId = button.getAttribute('data-spell');
        renderSpellList(spellId);

    });
});

function renderSpellList(spellId) {

    if(verifySpellOnList(spellId)) {

        if (spellName[spellId]) {

            const divNewSpell = document.createElement("div");
            divNewSpell.className = "knownSpell";
            divNewSpell.setAttribute("data-spell", spellId);
            const divButtons = document.createElement("div");
            divButtons.className = "buttonDiv";
            const newSpell = document.createElement("li");
            
            let descriptionButton = document.createElement("button");
            descriptionButton.className = "description";
            descriptionButton.innerHTML = "<img src=\"/style/images/angle-right.svg\" height=\"23px\">"
            descriptionButton.onclick = () => seeDescription();

            let removeButton = document.createElement("button");
            removeButton.className = "remove";
            removeButton.setAttribute("data-spell", spellId);
            removeButton.innerHTML = "<img src=\"style/images/x.svg\" height=\"23px\">"
            removeButton.onclick = () => removeSpell(removeButton.getAttribute('data-spell'));

            newSpell.textContent = spellName[spellId];
            
            cantripsList.appendChild(divNewSpell);
            divNewSpell.appendChild(newSpell);
            divNewSpell.appendChild(divButtons);
            divButtons.appendChild(descriptionButton);
            divButtons.appendChild(removeButton);

        }

    } else {

        const modal = document.getElementById("spellWarning")
        modal.showModal();

    }

}

function verifySpellOnList(spellId) {

    const spellsOnList = document.querySelectorAll(".knownSpell");
    
    if (!spellsOnList.length) {
        return true;
    }

    for (const spellOnList of spellsOnList) {
        const spellData = spellOnList.getAttribute('data-spell');
        if (spellId === spellData) {
            return false;
        }
    }

    return true;

}


function removeSpell(dataSpellButton) {

    const spellOnList = document.querySelectorAll(".knownSpell");
    
    spellOnList.forEach(spell => {
        const spellData = spell.getAttribute('data-spell');
        if (dataSpellButton == spellData) {
            spell.remove();
        }
    })

}
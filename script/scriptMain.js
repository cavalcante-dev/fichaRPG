
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

    if (spellName[spellId]) {

        const divNewSpell = document.createElement("div");
        divNewSpell.className = "knownSpell";
        const newSpell = document.createElement("li");
        const hr = document.createElement("hr");
        hr.className = "separator";
        
        let descriptionButton = document.createElement("button");
        descriptionButton.className = "description";
        descriptionButton.textContent=">";
        descriptionButton.onclick = () => seeDescription(spellId[spellId]);

        let removeButton = document.createElement("button");
        removeButton.className = "remove";
        removeButton.textContent="X";
        removeButton.onclick = () => removeSpell(spellName[spellId]);

        newSpell.textContent = spellName[spellId];
        
        cantripsList.appendChild(divNewSpell);
        cantripsList.appendChild(newSpell);
        cantripsList.appendChild(descriptionButton);
        cantripsList.appendChild(removeButton);

    }

}
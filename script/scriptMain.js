
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
    "amigos": "Amigos",
    "chamaSagrada": "Chama Sagrada",
    "golpeVerdadeiro": "Golpe Verdadeiro",
    "ilusaoMenor": "Ilusão Menor",
    "jatoDeVeneno": "Jato de Veneno",
    "luz": "Luz",
    "luzesDancantes": "Luzes Dançantes",
    "maoMagica": "Mão Mágica",
    "mensagem": "Mensagem",
    "prestidigitacao": "Prestidigitação",
    "protecaoComLamina": "Proteção com Lâmina",
    "rajadaDeFogo": "Rajada de Fogo",
    "raioDeGelo": "Raio de Gelo",
    "reparo": "Reparo",
    "salpicosDeAcido": "Salpicos de Ácido",
    "toqueChocante": "Toque Chocante",
    "toqueGelido": "Toque Gélido"
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
            descriptionButton.setAttribute("data-spell", spellId);
            descriptionButton.innerHTML = "<img src=\"style/images/angle-right.svg\" height=\"23px\">"
            descriptionButton.onclick = () => seeDescription(descriptionButton.getAttribute('data-spell'));

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

function seeDescription(dataSpellButton) {

    const descriptionModal = document.getElementById(dataSpellButton);
    descriptionModal.showModal();
    
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

const searchInput = document.getElementById('searchBar');
const cantrips = document.querySelectorAll('.spellDescription');
const noResultsMessage = document.getElementById('noResultsMessageCantrip');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    let countForFound = 0;
    cantrips.forEach(cantrip => {
        
        const nameElement = cantrip.querySelector('.nameSpell');
        const cantripName = nameElement ? nameElement.textContent.toLowerCase() : '';
        const isMatch = cantripName.includes(searchTerm);
        cantrip.style.display = searchTerm === '' || isMatch ? '' : 'none';
        if (isMatch) {
            countForFound++;
        };

    })
    if (countForFound === 0) {
        noResultsMessage.style.display = 'block';
    }
    if (searchTerm === '') {
        noResultsMessage.style.display = 'none';
    }
})
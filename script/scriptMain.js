function openSpellList() {

    const varWindow = window.open (
        'spellList.html', 
        'popup',
        "width=350, heigth=255, scrollbars=no, resizable=no, location=no, toolbar=no, menubar=no");

}


function addSpell() {

    const spellListItem = document.getElementById("spellListItem");
    let newSpell = document.createElement("li");

    newSpell.textContent = "Nova Magia";

    spellListItem.appendChild(newSpell);

}
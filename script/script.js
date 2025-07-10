function addSpell() {

    let spellListItem = document.getElementById("spellListItem");
    let newSpell = document.createElement("li");

    newSpell.textContent = "Nova Magia";

    spellListItem.appendChild(newSpell);

}
function addSpellOnMain() {
    if (window.opener&& !window.opener.closed) {
        window.opener.addSpell();
    } else {
        alert('A janela principal ta fechada seu pamonha')
    }
}
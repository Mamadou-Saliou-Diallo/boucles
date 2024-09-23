function showLoopInfo() {
    const loopType = document.getElementById("loopType").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    let info = "";

    switch (loopType) {
        case "for":
            info = "<strong>for</strong>: La boucle for est utilisée pour répéter une section de code un nombre fixe de fois. Utilisation : <br>" +
                   "for (initialisation; condition; incrément) { <br>" +
                   "    // code à exécuter <br>" +
                   "}";
            break;
        case "while":
            info = "<strong>while</strong>: La boucle while répète le bloc de code tant qu'une condition est vraie. Utilisation : <br>" +
                   "while (condition) { <br>" +
                   "    // code à exécuter <br>" +
                   "}";
            break;
        case "do while":
            info = "<strong>do while</strong>: La boucle do while exécute le bloc de code au moins une fois, puis répète tant que la condition est vraie. Utilisation : <br>" +
                   "do { <br>" +
                   "    // code à exécuter <br>" +
                   "} while (condition);";
            break;
        default:
            info = "Type de boucle non reconnu. Veuillez entrer 'for', 'while' ou 'do while'.";
    }

    resultDiv.innerHTML = info;
}

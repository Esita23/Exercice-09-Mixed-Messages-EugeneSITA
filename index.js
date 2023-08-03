
//creation d'une function genereMessageAleatoire()
function genererMessageAleatoire() {
    // Initialisation des valeurs
    const messages = [
        "Quand j'étais petit à la maison, le plus dur c'était la fin du mois",
        "Bonjour vous etes chinois",
        "Attendez-vous à rencontrer une personne spéciale aujourdhui",
        "Les articles définis en français sont : le, la, les.",
        "Les articles indéfinis en français sont : un, une, des.",
        "Votre journée sera remplie d'énergie positive.",
        "Attendez-vous à rencontrer une personne spéciale aujourd'hui.",
        "Il est temps d'explorer de nouvelles opportunités.",
        "rigolons ensemble les blagues de la francofonie",
        "rigolons ensemble les blagues de la francofonie",
    ];

    // Générer le message
    const messageAleatoire = messages[Math.floor(Math.random() * messages.length)];
    console.log(messageAleatoire);
}

genererMessageAleatoire();
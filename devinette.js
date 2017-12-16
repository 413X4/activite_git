/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var nombre = "";
var essais = 1;

// solution avec while
while (nombre !== solution && essais <= 6) {
    nombre = Number(prompt("Devinez un nombre entre 0 et 100"));
    if (essais === 6 && nombre !== solution) {
        console.log("Perdu, la solution était " + solution)
    } else if (nombre === solution) {
        console.log("Bravo la solution était " + solution);
        console.log("Vous avez trouvé en " + essais + " essai(s)");
    } else if (nombre > solution) {
        console.log(nombre + " est trop grand");
    } else if (nombre < solution) {
        console.log(nombre + " est trop petit");
    }
    essais++;

}

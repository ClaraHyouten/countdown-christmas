// Variable pour récupérer là où s'affichera notre countdown dans HTML (h2)
const text = document.querySelector("h2");

// On met tout le calcul suivant dans une fonction getCountdown
function getCountdown(){
    // Variable pour récupérer date du jour
    const today = new Date().getTime();
    // Variable pour récupérer date "cible" pour le compte à rebours, ici Noël 2023
    const countdownChristmas = new Date("December 25, 2024").getTime();
    // On crée une variable pour connaître le nombre de milisecondes qui séparent les 2 dates
    const distanceBase = countdownChristmas - today;

    // Nb de jours qu'il reste jusqu'à Noël, plutôt qu'en milisecondes. On divise distanceBase (nb de jours en milisecondes jusqu'à Noël, par une journée en milisecondes, on obtient cb de jours jusqu'à Noël)
    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    // Nb d'heures (en dehors des jours) jusqu'à Noël, on calcule grâce à modulo le reste de la précédente opération, et on le divise par 1000 * 60 * 60 pour obtenir le nb d'heures qu'il reste après les jours, et non pas le nb d'heures total
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Idem avec les minutes
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    // Idem avec les secondes
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

    // Implémenter ce code là où il y a le h2 dans HTML
    text.innerText = `${days} j ${hours} h ${minutes} min ${seconds} s`
}

getCountdown();

// A ce stade le compte à rebours fonctionne met il faut actualiser la page pour que le temps change, ce qui n'est pas dynamique !

// On va utiliser un interval pour cela, on met dans une constante ce que retourne cet interval, et on met 1000 pour qu'il soit appelé toutes les 1000 milisecondes, donc toutes les secondes ; et toutes les secondes elle va appeler la fonction getCountdown, donc là ça va être dynamique et on va voir le compte à rebours se MAJ toutes les secondes
const countdownInterval = setInterval(() => {
    getCountdown();
}, 1000);
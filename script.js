let wins = 0;
let losses = 0;
let playerHealth = 100;
let enemyHealth = 100;
let playerChoice = "";

const flipBtn = document.getElementById("flipBtn");
const resultDiv = document.getElementById("result");
const playerHealthBar = document.getElementById("playerHealth");
const enemyHealthBar = document.getElementById("enemyHealth");
const coin = document.getElementById("coin");
const coinImage = document.getElementById("coinImage");

// Choix Pile ou Face
document.getElementById("choosePile").addEventListener("click", () => chooseSide("Pile"));
document.getElementById("chooseFace").addEventListener("click", () => chooseSide("Face"));

function chooseSide(choice) {
    playerChoice = choice;
    document.getElementById("choice").classList.add("d-none");
    document.getElementById("combatZone").classList.remove("d-none");
    document.getElementById("stats").classList.remove("d-none");
}

// Lancer la pièce
flipBtn.addEventListener("click", () => {
    coin.classList.add("flip");

    setTimeout(() => {
        const outcome = Math.random() < 0.5 ? "Pile" : "Face";
        const isVictory = outcome === playerChoice;

        coinImage.textContent = outcome === "Pile" ? "🟡" : "🔵";

        if (isVictory) {
            resultDiv.innerHTML = "VICTOIRE !";
            resultDiv.classList.remove("defeat");
            resultDiv.classList.add("victory");
            enemyHealth -= 20;
            wins++;
        } else {
            resultDiv.innerHTML = "DÉFAITE...";
            resultDiv.classList.remove("victory");
            resultDiv.classList.add("defeat");
            playerHealth -= 20;
            losses++;
        }

        updateHealthBars();
        checkGameOver();
        coin.classList.remove("flip");
    }, 1000);
});

// Met à jour les barres de vie
function updateHealthBars() { 
    playerHealthBar.style.width = playerHealth + "%"; 
    enemyHealthBar.style.width = enemyHealth + "%";
    if (enemyHealth <= 50) {
        enemyHealthBar.classList.add("boss-health");
    } else {
        enemyHealthBar.classList.remove("boss-health");
    }
};
    
// Vérifie si le jeu est terminé 
function checkGameOver() { 
    if (playerHealth <= 0) {
        alert("Tu as perdu !"); 
        resetGame(); 
    } else if (enemyHealth <= 0) { 
        alert("Tu as gagné !"); 
        resetGame(); 
    } 
};
    
// Réinitialiser le jeu 
function resetGame() { 
    window.location.reload();
};

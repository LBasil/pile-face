let wins = 0;
let losses = 0;

document.getElementById("flipBtn").addEventListener("click", () => {
    const coin = document.getElementById("coin");
    const result = document.getElementById("result");

    coin.classList.add("flip");

    setTimeout(() => {
        const outcome = Math.random() < 0.5 ? "Pile" : "Face";

        const coinEmoji = document.getElementById("coinImage");
        if (outcome === "Pile") {
            coinEmoji.textContent = "🟡";
            result.innerHTML = "VICTOIRE !";
            result.classList.remove("defeat");
            result.classList.add("victory");
            wins++;
        } else {
            coinEmoji.textContent = "🔵";
            result.innerHTML = "DÉFAITE...";
            result.classList.remove("victory");
            result.classList.add("defeat");
            losses++;
        }

        document.getElementById("wins").innerText = wins;
        document.getElementById("losses").innerText = losses;

        coin.classList.remove("flip");
    }, 1000);
});

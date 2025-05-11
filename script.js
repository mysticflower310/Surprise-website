
document.getElementById("revealButton").addEventListener("click", function() {
    document.querySelector(".landing-page").style.display = "none";
    document.getElementById("surpriseContent").style.display = "block";
    document.getElementById("surpriseContent").classList.remove("hidden");
});

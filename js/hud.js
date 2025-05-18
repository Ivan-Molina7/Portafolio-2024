const espBtn = document.querySelector(".hud__idioma-1");
const engBtn = document.querySelector(".hud__idioma-2");

espBtn.addEventListener("click", () => {
    espBtn.style.fontWeight = "bold";
    espBtn.style.color = "#00C457";
    engBtn.style.fontWeight = "400";
    engBtn.style.color = "#fff";
});


engBtn.addEventListener("click", () => {
    engBtn.style.fontWeight = "bold";
    engBtn.style.color = "#00C457";
    espBtn.style.fontWeight = "400";
    espBtn.style.color = "#fff";
});

const espBtn = document.querySelector(".hud__idioma-1");
const engBtn = document.querySelector(".hud__idioma-2");

const navLanguage = document.getElementById("nav-language");
const textsToChange = document.querySelectorAll("[data-section]");
const inputToChange = document.querySelectorAll("[data-input]");

espBtn.addEventListener("click", () => {
espBtn.style.opacity = "1";
  espBtn.style.fontWeight = "bold";
  espBtn.style.color = "#00C457";

  engBtn.style.fontWeight = "400";
  engBtn.style.color = "#fff";
  engBtn.style.opacity = ".4";
});

engBtn.addEventListener("click", () => {
    engBtn.style.opacity = "1";
  engBtn.style.fontWeight = "bold";
  engBtn.style.color = "#00C457";

  espBtn.style.fontWeight = "400";
  espBtn.style.color = "#fff";
  espBtn.style.opacity = ".4";
});


const changeLanguage = async (language) => {
    const requestJson = await fetch(`../languages/${language}.json`);
    const texts = await requestJson.json();
  
    for (const textToChange of textsToChange) {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;
  
      
      textToChange.innerHTML = texts[section][value];
  
        if (language === "es" && textToChange.classList.contains("es")) {
       
        }else if (language === "en" && textToChange.classList.contains("en")) {
      
        } 
        else if (textToChange.classList.contains("es")) {
        
          textToChange.classList.remove("es");
          textToChange.classList.add("en");
        } else if (textToChange.classList.contains("en")) {
  
          textToChange.classList.remove("en");
          textToChange.classList.add("es");
        } 
    }
  
    for (const input of inputToChange) {
  
      const section = input.dataset.input;
      const value = input.dataset.value;
  
       input.placeholder = texts[section][value];
  
    }
  
    localStorage.setItem('language', language);
  };


const loadLanguage = () => {
  const language = localStorage.getItem("language");
  if (language) {
    changeLanguage(language);
  } else {
    // Si no hay idioma guardado, usar el español por defecto
    changeLanguage("es");
  }

  if (language === "es") {
    espBtn.style.fontWeight = "bold";
    espBtn.style.color = "#00C457";

    engBtn.style.opacity = ".4";
    engBtn.style.fontWeight = "400";
    engBtn.style.color = "#fff";
  } else if (language === "en") {
    engBtn.style.fontWeight = "bold";
    engBtn.style.color = "#00C457";

    espBtn.style.opacity = ".4";
    espBtn.style.fontWeight = "400";
    espBtn.style.color = "#fff";
  }
};

navLanguage.addEventListener("click", (e) => {
  changeLanguage(e.target.dataset.language);
});

loadLanguage();

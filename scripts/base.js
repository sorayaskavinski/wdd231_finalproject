// Last modified and menu button function
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  const yearEl = document.getElementById("year");
  const modifiedEl = document.getElementById("lastModified");

  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (modifiedEl) modifiedEl.textContent = "Last modified: " + document.lastModified;
});

// Function to safely set text
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// Load language data dynamically
async function loadLanguage(lang) {
  try {
    const response = await fetch(`data/${lang}.json`); //API/DATA INTEGRATION -- VIDEO
    const data = await response.json();

    // Header & Footer
    const headerFooterKeys = [
      "siteTitle", "home", "aboutus", "servicesBtn", "contact",
      "titleFooter", "moreInfo", "contactFooter", "servicesFooter",
      "lastTitle", "regionBtn", "contactBtn"
    ];
    headerFooterKeys.forEach(key => setText(key, data[key]));

    // Home Page
    setText("mainServices", data.mainServices); //--DOM VIDEO
    updateList("serviceList", data.serviceList);

    // About Page
    const aboutKeys = [
      "aboutCompany", "aboutCompanyText1", "aboutCompanyText2", "aboutCompanyText3",
      "aboutProfessional", "aboutProfessionalText1", "aboutProfessionalText2", "aboutProfessionalText3"
    ];
    aboutKeys.forEach(key => setText(key, data[key]));

    // Services Page
    setText("servicosEletricos", data.servicosEletricos);
    setText("captionEletrico", data.captionEletrico);
    updateList("servicosEletricosList", data.servicosEletricosList);

    setText("hidraServices", data.hidraServices);
    setText("captionHidra", data.captionHidra);
    updateList("hidraServiceList", data.hidraServiceList);

    setText("captionStove", data.captionStove);
    setText("fogaoName", data.fogaoName);
    updateList("fogaoList", data.fogaoList);

  } catch (error) {
    console.error("Erro ao carregar idioma:", error);
  }
}

// Helper to update a list from array
function updateList(id, items) {
  const list = document.getElementById(id);
  if (list && Array.isArray(items)) {
    list.innerHTML = "";
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }
}

// Language button click
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.id;
    localStorage.setItem("lang", lang);
    loadLanguage(lang);
  });
});

// Load saved or default language
window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("lang") || "en"; //LOCALSTORAGE -- VIDEO
  loadLanguage(savedLang);
});

// Lastmodified and menu button function
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
  
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
  });

// Click on flags
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.id; // 'pt' ou 'en'
        loadLanguage(lang);
    });
  });
  
// Pattern English
window.addEventListener("load", () => {
    loadLanguage("en");
  });


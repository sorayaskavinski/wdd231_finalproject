//Languages button
function loadLanguage(lang) {
  fetch(`data/${lang}.json`)
      .then(response => response.json())
      .then(data => {
          document.getElementById("siteTitle").textContent = data.siteTitle;
          document.getElementById("home").textContent = data.home;
          document.getElementById("aboutus").textContent = data.aboutus;
          document.getElementById("servicesBtn").textContent = data.servicesBtn;
          document.getElementById("contact").textContent = data.contact;
          document.getElementById("mainServices").textContent = data.mainServices;
          
          const serviceList = document.getElementById("serviceList");
          serviceList.innerHTML = "";
          data.serviceList.forEach(item => {
              const li = document.createElement("li");
              li.textContent = item;
              serviceList.appendChild(li);
          });

          document.getElementById("regionBtn").textContent = data.regionBtn;
          document.getElementById("contactBtn").textContent = data.contactBtn;
          document.getElementById("contactFooter").textContent = data.contactFooter;
          document.getElementById("servicesFooter").textContent = data.servicesFooter;
      })
      .catch(error => console.error("Erro ao carregar idioma:", error));
}

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


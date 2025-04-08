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

// Function to Update elements as they are pushed
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  
  // Language function
  function loadLanguage(lang) {
    fetch(`data/${lang}.json`)
      .then(response => response.json())
      .then(data => {
        // Base Header & Footer
        setText("siteTitle", data.siteTitle);
        setText("home", data.home);
        setText("aboutus", data.aboutus);
        setText("servicesBtn", data.servicesBtn);
        setText("contact", data.contact);
  
        setText("titleFooter", data.titleFooter);
        setText("moreInfo", data.moreInfo);
        setText("contactFooter", data.contactFooter);
        setText("servicesFooter", data.servicesFooter);
        setText("lastTitle", data.lastTitle);
        setText("regionBtn", data.regionBtn);
        setText("contactBtn", data.contactBtn);
  
        // Home Page
        setText("mainServices", data.mainServices);
  
        const serviceList = document.getElementById("serviceList");
        if (serviceList && data.serviceList) {
          serviceList.innerHTML = "";
          data.serviceList.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            serviceList.appendChild(li);
          });
        }
  
        // About Page
        setText("aboutCompany", data.aboutCompany);
        setText("aboutCompanyText1", data.aboutCompanyText1);
        setText("aboutCompanyText2", data.aboutCompanyText2);
        setText("aboutCompanyText3", data.aboutCompanyText3);
  
        setText("aboutProfessional", data.aboutProfessional);
        setText("aboutProfessionalText1", data.aboutProfessionalText1);
        setText("aboutProfessionalText2", data.aboutProfessionalText2);
        setText("aboutProfessionalText3", data.aboutProfessionalText3);
  
        //Services Page
        setText("servicosEletricos", data.servicosEletricos);       
        setText("captionEletrico", data.captionEletrico);        
        const servicosEletricosList = document.getElementById("servicosEletricosList");
        if (servicosEletricosList && data.servicosEletricosList) {
          servicosEletricosList.innerHTML = "";
          data.servicosEletricosList.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            servicosEletricosList.appendChild(li);
          });
        }

        setText("hidraServices", data.hidraServices);
        setText("captionHidra", data.captionHidra);       
        const hidraServiceList = document.getElementById("hidraServiceList");
        if (hidraServiceList && data.hidraServiceList) {
          servicosEletricosList.innerHTML = "";
          data.hidraServiceList.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            hidraServiceList.appendChild(li);
          });
        }


      })
      .catch(error => console.error("Erro ao carregar idioma:", error));
  }
  
  
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.id; // pt, en, etc.
      localStorage.setItem("lang", lang); // salva idioma escolhido
      loadLanguage(lang);
    });
  });
  
  // Pattern Language
  window.addEventListener("load", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    loadLanguage(savedLang);
  });
  



//Languages of ABOUT US
function loadLanguage(lang) {
    fetch(`data/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            //ABOUT US ELEMENTS
          document.getElementById("aboutCompany").textContent = data.aboutCompany;
          document.getElementById("aboutCompanyText1").textContent = data.aboutCompanyText1;
          document.getElementById("aboutCompanyText2").textContent = data.aboutCompanyText2;
          document.getElementById("aboutCompanyText3").textContent = data.aboutCompanyText3; 
          document.getElementById("aboutProfessional").textContent = data.aboutProfessional;
          document.getElementById("aboutProfessionalText1").textContent = data.aboutProfessionalText1;
          document.getElementById("aboutProfessionalText2").textContent = data.aboutProfessionalText2;
          document.getElementById("aboutProfessionalText3").textContent = data.aboutProfessionalText3;
           //base head elements
          document.getElementById("siteTitle").textContent = data.siteTitle;
          document.getElementById("home").textContent = data.home;
          document.getElementById("aboutus").textContent = data.aboutus;
          document.getElementById("servicesBtn").textContent = data.servicesBtn;
          document.getElementById("contact").textContent = data.contact;
        //Footer base elements
          document.getElementById("titleFooter").textContent = data.titleFooter;
          document.getElementById("moreInfo").textContent = data.moreInfo;
          document.getElementById("contactFooter").textContent = data.contactFooter;
          document.getElementById("servicesFooter").textContent = data.servicesFooter;
          document.getElementById("lastTitle").textContent = data.lastTitle;
          document.getElementById("regionBtn").textContent = data.regionBtn;
          document.getElementById("contactBtn").textContent = data.contactBtn;  
          
      })
      .catch(error => console.error("Erro ao carregar idioma:", error));
}


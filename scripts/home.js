//Languages of HomePage
function loadLanguage(lang) {
  fetch(`data/${lang}.json`)
      .then(response => response.json())
      .then(data => {
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

  //homepage language elements
          document.getElementById("mainServices").textContent = data.mainServices;
          
          const serviceList = document.getElementById("serviceList");
          serviceList.innerHTML = "";
          data.serviceList.forEach(item => {
              const li = document.createElement("li");
              li.textContent = item;
              serviceList.appendChild(li);
          });
           
      })
      .catch(error => console.error("Erro ao carregar idioma:", error));
}


//hide Region of Attendance
const button = document.getElementById('regionBtn');
const mapContainer = document.getElementById('btn-container');
  
  button.addEventListener('click', () => {
    mapContainer.classList.toggle('hidden');
  });

// carousel pictures
fetch('data/carousel-images.json')
  .then(respose => respose.json())
  .then(images => {
    const carousel = document.getElementById('carousel');
    let currentIndex = 0;

    //get the img just once
    const img = document.createElement('img');
    img.src = images [currentIndex].src;
    img.alt = images [currentIndex].alt;
    carousel.appendChild(img);

    //function to change pictures
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      img.src = images[currentIndex].src;
      img.alt = images[currentIndex].alt;
    }, 3000); //changes at every 3 seconds
  })
  .catch(error => {
    console.error("Failed to load carousel images:", error);
  });  
  
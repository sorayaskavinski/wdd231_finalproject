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


//hide map in the button - Region of Attendance
const button = document.getElementById('show-btn');
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
  
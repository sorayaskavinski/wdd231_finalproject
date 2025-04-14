//hide Region of Attendance
const button = document.getElementById('regionBtn');
const mapContainer = document.getElementById('btn-container');
  
  button.addEventListener('click', () => {
    mapContainer.classList.toggle('hidden');
  });

// carousel pictures
fetch('data/carousel-images.json') //API-DATA INTEGRATION -- VIDEO
  .then(respose => respose.json())
  .then(images => {
    const carousel = document.getElementById('carousel');
    let currentIndex = 0;

    //get the img just once
    const img = document.createElement('img');
    img.loading = "lazy";
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
  
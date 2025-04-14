let currentVisibleId = null;

// Alternates the visibility
function toggleDetails(id) {   //TOGGLE VISIBILITY -- VIDEO
  const selected = document.getElementById(id);

  if (!selected) return;

  const allDetails = document.querySelectorAll('.service-details');

  if (currentVisibleId === id) {
    
    selected.classList.add('hidden');
    currentVisibleId = null;
  } else {
    
    allDetails.forEach(section => section.classList.add('hidden'));

    selected.classList.remove('hidden');
    selected.scrollIntoView({ behavior: 'smooth', block: 'start' }); // DOM - VIDEO
    currentVisibleId = id;
  }
}

// Adds click on data-target events
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll('[data-toggle="service"]');

  toggleButtons.forEach(button => {
    const targetId = button.getAttribute('data-target');

    button.addEventListener("click", () => {
      toggleDetails(targetId);
    });
  });

  //Lazy loading for videos
  const videos = document.querySelectorAll("video[data-src]");

  const loadVideo = (video) => {
    const src = video.getAttribute("data-src");
    if (src) {
      const source = document.createElement("source");
      source.src = src;
      source.type = "video/mp4";
      video.appendChild(source);
      video.load();
      video.play().catch(() => {}); 
    }
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadVideo(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px 200px 0px", 
    threshold: 0.1
  });

  videos.forEach(video => observer.observe(video));
});
let currentVisibleId = null;

function toggleDetails(id) {
    const selected = document.getElementById(id);

    // If it's visible it hides
    if (currentVisibleId === id) {
      selected.classList.add('hidden');
      currentVisibleId = null;
    } else {
      // Hides every part
      const allDetails = document.querySelectorAll('.service-details');
      allDetails.forEach(section => section.classList.add('hidden'));

      // Shows the new one
      selected.classList.remove('hidden');
      selected.scrollIntoView({ behavior: 'smooth' });
      currentVisibleId = id;
    }
  }


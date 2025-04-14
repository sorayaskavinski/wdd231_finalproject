document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !phone || !message) {
        feedback.textContent = "Please fill in the fields.";
        feedback.classList.remove("hidden");
        feedback.style.color = "red";
        return;
      }
  
      const scriptURL = "https://script.google.com/macros/s/AKfycbwNbJj0pmZCbg8mUuXIwpvErQmSZaA7odo1f1axA36oyD5tqlvDikeo1HgK9kGpqdy2Gg/exec";
  
      fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            feedback.textContent = "Message sent with success!";
            feedback.classList.remove("hidden");
            feedback.style.color = "green";
            form.reset();
          } else {
            feedback.textContent = "Error while sending the message. Try it again.";
            feedback.style.color = "red";
          }
        })
        .catch((error) => {
          console.error("Erro:", error);
          feedback.textContent = "Conection error.";
          feedback.style.color = "red";
        });
    });
  });
  
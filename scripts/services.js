let currentVisibleId = null;

// Alterna a exibição dos detalhes de serviço
function toggleDetails(id) {
  const selected = document.getElementById(id);

  if (!selected) return;

  const allDetails = document.querySelectorAll('.service-details');

  if (currentVisibleId === id) {
    // Se já estiver visível, esconde
    selected.classList.add('hidden');
    currentVisibleId = null;
  } else {
    // Esconde todos os outros
    allDetails.forEach(section => section.classList.add('hidden'));

    // Mostra o selecionado
    selected.classList.remove('hidden');
    selected.scrollIntoView({ behavior: 'smooth', block: 'start' });
    currentVisibleId = id;
  }
}

// Adiciona evento de clique automático para botões com data-target
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll('[data-toggle="service"]');

  toggleButtons.forEach(button => {
    const targetId = button.getAttribute('data-target');

    button.addEventListener("click", () => {
      toggleDetails(targetId);
    });
  });
});

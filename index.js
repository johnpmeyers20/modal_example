const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.style.display = 'block';
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})
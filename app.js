const avatar = document.querySelector(".avatar");
const modal = document.querySelector(".modal-bg");
const modalBox = document.querySelector(".modal");
const modalButton = document.querySelector(".close-btn");

avatar.addEventListener("click", (e) => {
  modal.classList.add("visible-modal");
});
modalButton.addEventListener("click", (e) => {
  modal.classList.toggle("visible-modal");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("visible-modal");
}

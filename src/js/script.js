const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");


document.querySelectorAll(".ods-box").forEach(box => {
    box.addEventListener("click", async function () {
        const objetivoNum = this.getAttribute("data-objetivo");

        const { objetivos } = await import('./objetivos.js');

        modalTitle.textContent = `Objetivo ${objetivoNum}`;
        modalText.textContent = objetivos[objetivoNum];
        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

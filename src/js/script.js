const objetivos = {
    1: "Fin de la pobreza: Erradicar la pobreza en todas sus formas y en todo el mundo.",
    2: "Hambre cero: Poner fin al hambre, lograr la seguridad alimentaria y mejorar la nutrición.",
    3: "Salud y bienestar: Garantizar una vida sana y promover el bienestar para todos.",
    4: "Educación de calidad: Asegurar educación inclusiva, equitativa y de calidad.",
    5: "Igualdad de género: Lograr la igualdad de género y empoderar a todas las mujeres y niñas.",
    6: "Agua limpia y saneamiento: Garantizar disponibilidad y gestión sostenible del agua.",
    7: "Energía asequible y no contaminante: Acceso a energía sostenible y moderna.",
    8: "Trabajo decente y crecimiento económico: Promover el crecimiento económico sostenido.",
    9: "Industria, innovación e infraestructura: Fomentar la innovación y la industrialización.",
    10: "Reducción de desigualdades: Reducir la desigualdad dentro y entre países.",
    11: "Ciudades y comunidades sostenibles: Lograr ciudades inclusivas y sostenibles.",
    12: "Producción y consumo responsables: Garantizar patrones de producción sostenibles.",
    13: "Acción por el clima: Tomar medidas urgentes para combatir el cambio climático.",
    14: "Vida submarina: Conservar y usar sosteniblemente los océanos y recursos marinos.",
    15: "Vida de ecosistemas terrestres: Gestionar sosteniblemente los bosques y la biodiversidad.",
    16: "Paz, justicia e instituciones sólidas: Promover sociedades pacíficas y justas.",
    17: "Alianzas para lograr los objetivos: Revitalizar la alianza mundial para el desarrollo."
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".ods-box").forEach(box => {
    box.addEventListener("click", function () {
        const objetivoNum = this.getAttribute("data-objetivo");
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

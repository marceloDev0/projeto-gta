const botao = document.querySelector(".btn-plataforma");
const elementosplataforma = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementosplataforma.classList.toggle("ativo");
});

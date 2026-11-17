const botao = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

if (!botao || projetosInativos.length === 0) {
  if (botao) botao.style.display = "none";
} else {
  botao.addEventListener("click", () => {
    if (botao.textContent === "Mostrar Menos") {
      ocultarItens();
    } else {
      mostrarItens();
    }
  });
}

function mostrarItens() {
  projetosInativos.forEach((projetosInativo) => {
    projetosInativo.classList.add("ativo");
  });
  botao.textContent = "Mostrar Menos";
}

function ocultarItens() {
  projetosInativos.forEach((projetosInativo) => {
    projetosInativo.classList.remove("ativo");
  });
  botao.textContent = "Mostrar Mais";
}

// ACCORDION
document.querySelectorAll(".accordion__header").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    item.classList.toggle("active");
  });
});

// BOTÃO VOLTAR AO TOPO
const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    btnTopo.classList.add("show");
  } else {
    btnTopo.classList.remove("show");
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

btnTopo.addEventListener("click", () => {
  // Fecha todos os accordions
  document.querySelectorAll(".accordion__item").forEach(item => {
    item.classList.remove("active");
  });

  // Volta suavemente ao topo
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


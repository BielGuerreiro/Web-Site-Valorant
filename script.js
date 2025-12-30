// Desativa a restauração automática de scroll do navegador
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", function () {
  const scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) {
    // Pequeno atraso para garantir que o layout carregou 100%
    setTimeout(() => {
      window.scrollTo(0, parseFloat(scrollpos));
    }, 50);
  }
});

window.addEventListener("scroll", function () {
  localStorage.setItem("scrollpos", window.scrollY);
});

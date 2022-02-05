export default function initScrollSuave() {
  //pra rolar a pagina ate o link selecionado
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault(); //evitar que o link va ate a pagina clicada
    const href = event.currentTarget.getAttribute("href"); //quando clica no link pega o href
    const section = document.querySelector(href); //seleciona o href clicado
    //const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth'
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll(".js-numero");
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect;
      animaNumeros();
    }
  }

  const oberverTarget = document.querySelector(".numeros");
  observer = new MutationObserver(handleMutation);

  observer.observe(oberverTarget, { attributes: true });
}

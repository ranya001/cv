document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-details");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const details = btn.nextElementSibling;
      const allDetails = document.querySelectorAll(".details");

      // Fermer les autres paragraphes
      allDetails.forEach((d) => {
        if (d !== details) {
          d.style.display = "none";
          d.style.maxHeight = "0px";
        }
      });

      // Si le paragraphe est déjà ouvert → on le ferme
      if (details.style.display === "block") {
        collapse(details);
      } else {
        expand(details);
      }
    });
  });

  // ----- FONCTIONS D’ANIMATION -----
  
  function expand(element) {
    element.style.display = "block";
    element.style.maxHeight = "0px";
    let height = 0;

    const targetHeight = element.scrollHeight; // hauteur totale du texte
    const step = targetHeight / 20; // vitesse d’animation

    const timer = setInterval(() => {
      height += step;
      if (height >= targetHeight) {
        height = targetHeight;
        clearInterval(timer);
      }
      element.style.maxHeight = height + "px";
    }, 30); // toutes les 30 ms → animation fluide
  }

  function collapse(element) {
    let height = element.scrollHeight;
    const step = height / 20;

    const timer = setInterval(() => {
      height -= step;
      if (height <= 0) {
        height = 0;
        clearInterval(timer);
        element.style.display = "none";
      }
      element.style.maxHeight = height + "px";
    }, 30);
  }
});


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
// TOOLTIP simple (apparition sur survol)
const skills = document.querySelectorAll("#competences dt");

// Création du tooltip (bulle d’info)
const tooltip = document.createElement("div");
tooltip.style.position = "absolute";
tooltip.style.padding = "5px 10px";
tooltip.style.backgroundColor = "#333";
tooltip.style.color = "#fff";
tooltip.style.borderRadius = "5px";
tooltip.style.fontSize = "0.9em";
tooltip.style.display = "none";
tooltip.style.pointerEvents = "none";
document.body.appendChild(tooltip);

// Quand la souris passe sur une compétence
skills.forEach(skill => {
  skill.addEventListener("mouseenter", (e) => {
    tooltip.textContent = skill.getAttribute("data-description");
    tooltip.style.display = "block";
  });

  skill.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY + 10 + "px";
  });

  skill.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});



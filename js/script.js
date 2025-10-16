document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".btn-details");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const details = btn.nextElementSibling;
      const allDetails = document.querySelectorAll(".details");
      allDetails.forEach(d => {
        if (d !== details) {
          d.style.display = "none";
          d.style.maxHeight = "0px";
        }
      });
      if (details.style.display === "block") {
        collapse(details);
      } else {
        expand(details);
      }
    });
  });

  function expand(element) {
    element.style.display = "block";
    let height = 0;
    const targetHeight = element.scrollHeight;
    const step = targetHeight / 20;
    const timer = setInterval(() => {
      height += step;
      if (height >= targetHeight) {
        height = targetHeight;
        clearInterval(timer);
      }
      element.style.maxHeight = height + "px";
    }, 30);
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

  
  const skills = document.querySelectorAll("#competences dt");
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

  skills.forEach(skill => {
    skill.addEventListener("mouseenter", () => {
      tooltip.textContent = skill.getAttribute("data-description");
      tooltip.style.display = "block";
    });
    skill.addEventListener("mousemove", e => {
      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY + 10 + "px";
    });
    skill.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });

  
  const skillsLevels = {
    "HTML": 5,
    "CSS": 4,
    "JavaScript": 3,
    "Git / GitLab": 2
  };

  const dts = document.querySelectorAll("#competences dt");
  dts.forEach(dt => {
    const skill = dt.dataset.skill;
    const level = skillsLevels[skill] || 0;
    const bar = dt.nextElementSibling.querySelector(".bar");
    if (bar) {
      bar.style.width = (level * 30) + "px"; 
    }
  });
});

/*function afficherEtoiles() {
  const allStars = document.querySelectorAll(".stars");
  allStars.forEach((starSpan) => {
    const skillName = starSpan.parentElement.previousElementSibling.dataset.skill;
    const level = skillsLevels[skillName] || 0;
    let starsHTML = "";

    for (let i = 1; i <= 5; i++) {
      if (i <= level) {
        starsHTML += '<span class="star filled">★</span>'; // pleine
      } else {
        starsHTML += '<span class="star">☆</span>'; // vide
      }
    }

    starSpan.innerHTML = starsHTML;
  });
}



afficherEtoiles();*/

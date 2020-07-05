const filters = () => {
  const filtersForm = document.querySelector(".top-form");
  let bonus = false; //?Рубли - false; Бонусы - true
  const filters = document.querySelectorAll("select");
  filtersForm.addEventListener("change", (event) => {
    const target = event.target;

    //Subj
    if (target.closest("#subj")) {
      const cards = document.querySelectorAll(".card");
      filters[1].value = "";
      filters[2].value = "";
      cards.forEach((el, index) => {
        const text = target.options[target.selectedIndex].value;

        if (!el.querySelector(".card-title").textContent.includes(text)) {
          el.classList.add("hidden");
        } else el.classList.remove("hidden");
      });
    }

    //Genre
    if (target.closest("#genre")) {
      filters[0].value = "";
      filters[2].value = "";
      const cards = document.querySelectorAll(".card");
      cards.forEach((el, index) => {
        const text = target.options[target.selectedIndex].value;

        if (!el.querySelector(".card-genre").textContent.includes(text)) {
          el.classList.add("hidden");
        } else el.classList.remove("hidden");
      });
    }

    //Grade
    if (target.closest("#grade")) {
      filters[0].value = "";
      filters[1].value = "";
      const cards = document.querySelectorAll(".card");
      cards.forEach((el, index) => {
        const text = target.options[target.selectedIndex].value;
        if (target.selectedIndex === 1) {
          if (
            el.querySelector(".card-grade").textContent.includes("10") ||
            el.querySelector(".card-grade").textContent.includes("11")
          ) {
            el.classList.add("hidden");
            return;
          } else {
            el.classList.remove("hidden");
          }
        }

        if (!el.querySelector(".card-grade").textContent.includes(text)) {
          el.classList.add("hidden");
        } else el.classList.remove("hidden");
      });
    }
  });

  //Руб/Бонус
  filtersForm.addEventListener("click", (event) => {
    const target = event.target;

    if (target.closest("#rub-bon")) {
      bonus = !bonus;
      const priceBlocks = document.querySelectorAll(".price");
      const bonusBlocks = document.querySelectorAll(".bonus");

      if (bonus) {
        priceBlocks.forEach((el) => {
          el.classList.add("hidden");
        });
        bonusBlocks.forEach((el) => {
          el.classList.remove("hidden");
        });
      } else {
        priceBlocks.forEach((el) => {
          el.classList.remove("hidden");
        });
        bonusBlocks.forEach((el) => {
          el.classList.add("hidden");
        });
      }
    }
  });

  //Поиск

  filtersForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.closest("#search") || target.closest("#get-filter")) {
      const cards = document.querySelectorAll(".card");
      cards.forEach((el) => {
        const request = document.querySelector("#search").textContent;

        if (el.querySelector(".card-title").textContent.includes(request)) {
          el.classList.add("hidden");
        } else el.classList.remove("hidden");
      });
    }
  });
};

export default filters;

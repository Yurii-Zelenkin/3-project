const swiper = new Swiper(".brands-repair__slider", {
  loop: true,
  slidesPerView: "auto",
  freeMode: {
    enabled: true,
    sticky: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    dynamicMainBullets: 7,
    clickable: true,
  },
  on: {
    init: function () {
      checkWindowSize(this);
    },
    resize: function () {
      checkWindowSize(this);
    },
  },
});

function checkWindowSize(swiperInstance) {
  if (window.innerWidth <= 768) {
    swiperInstance.enable();
    swiperInstance.el.classList.remove("-non-slider");
  } else {
    swiperInstance.disable();
    swiperInstance.el.classList.add("-non-slider");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const showAllBtn = document.querySelector(".brands-repair__btn");

  if (showAllBtn) {
    showAllBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const swiperContainer = document.querySelector(".brands-repair__slider");
      swiperContainer.classList.toggle("expanded");

      this.textContent = swiperContainer.classList.contains("expanded")
        ? "Скрыть"
        : "Показать все";
    });
  }
});

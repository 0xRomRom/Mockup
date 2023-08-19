window.addEventListener("DOMContentLoaded", () => {
  tabtitle.classList.add("hidden");
  tabtitle.classList.add("slideIn");
  tabtitle.classList.remove("hidden");
});

//Menu hover liught animation
const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

for (const card of document.querySelectorAll(".card")) {
  card.onmousemove = (e) => handleOnMouseMove(e);
}

const tabtitle = document.querySelector(".tabtitle");

//Menu title switcher
const btns = document.querySelectorAll(".cta-stl");
const iEl = document.querySelectorAll("i");
const switchMenuTitle = (e) => {
  btns.forEach((btn) => {
    btn.disabled = true;
  });
  tabtitle.disabled = true;
  tabtitle.innerHTML = e;
  tabtitle.classList.add("hidden");
  tabtitle.classList.add("slideIn");
  tabtitle.classList.remove("hidden");
  setTimeout(() => {
    tabtitle.classList.remove("slideIn");
    btns.forEach((btn) => {
      btn.disabled = false;
    });
  }, 300);
};

const menuBar = document.querySelector(".inner-dashbar");
menuBar.addEventListener("click", (e) => {
  if (!e.target.dataset.btn) return;
  btns.forEach((btn) => {
    btn.classList.remove("selected");
  });

  iEl.forEach((el) => {
    el.classList.remove("translateX");
  });

  e.target.children[0].classList.add("translateX");
  e.target.classList.add("selected");
  switchMenuTitle(e.target.textContent);
});

//Toggle tabs
const tabs = document.querySelectorAll(".tabs");
btns.forEach(button => {
  button.addEventListener("click", () => {
    const btn = button.textContent.replace(/\s+/g, '');
    tabs.forEach(tab => {
      tab.classList.add("hidden");
      tab.classList.remove("slideIn");
      if(tab.dataset.tab === btn) {
        tab.classList.remove("hidden");
        tab.classList.add("slideIn");
      }
    })
  });
})
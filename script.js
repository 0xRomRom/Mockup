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
btns.forEach((button) => {
  button.addEventListener("click", () => {
    const btn = button.textContent.replace(/\s+/g, "");
    tabs.forEach((tab) => {
      tab.classList.add("hidden");
      tab.classList.remove("slideIn");
      if (tab.dataset.tab === btn) {
        tab.classList.remove("hidden");
        tab.classList.add("slideIn");
      }
    });
  });
});

//Animate video on hover
const videoTiles = document.querySelectorAll(".videotile");
for (let i = 1; i <= videoTiles.length; i++) {
  const vidElement = document.querySelector(`.vid${i}`);
  const videoElement = document.querySelector(`.video${i}`);

  vidElement.addEventListener("mouseenter", () => {
    videoElement.play();
  });

  vidElement.addEventListener("mouseleave", () => {
    videoElement.pause();
  });
}

//Menu hover liught animation
const handleOnMouseMove2 = (e) => {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  target.style.setProperty("--mouse-x2", `${x}px`);
  target.style.setProperty("--mouse-y2", `${y}px`);
};

for (const card of document.querySelectorAll(".videotile")) {
  card.onmousemove = (e) => handleOnMouseMove2(e);
}




//Handle video preview
const videotilescontainer = document.querySelector(".videotilescontainer");
const prevVideo = document.querySelector(".prev-vid");
const prevTitle = document.querySelector(".prev-title");
const prevDesc = document.querySelector(".prev-desc");
const overlay = document.querySelector(".overlay");

videotilescontainer.addEventListener("click", (e) => {
  const len = +e.target.children.length;
  if(len === 1) {
    const title = e.target.parentNode.children[1].textContent;
    prevTitle.innerHTML = title;
    const desc = e.target.parentNode.children[2].textContent;
    prevDesc.innerHTML = desc + "<br><br>" + desc + "<br><br>" + desc + "<br><br>" + desc;
  } 
  if(len === 3) {
    const title = e.target.children[1].textContent;
    prevTitle.innerHTML = title;
    const desc = e.target.children[2].textContent;
    prevDesc.innerHTML = desc + "<br><br>" + desc + "<br><br>" + desc + "<br><br>" + desc;
  }

  prevVideo.play();
  overlay.classList.remove("hidden");
});


//Close preview
const closePrevModalBtn = document.querySelector(".close-prevmodal");
closePrevModalBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  prevTitle.innerHTML = '';
  prevDesc.innerHTML = '';
});

//Toggle fullscreen vid
function toggleFullscreen() {
  if (!document.fullscreenElement) {
      // If the document is not currently in fullscreen mode
      if (prevVideo.requestFullscreen) {
          prevVideo.requestFullscreen();
      } else if (prevVideo.mozRequestFullScreen) { // Firefox
          prevVideo.mozRequestFullScreen();
      } else if (prevVideo.webkitRequestFullscreen) { // Chrome, Safari, and Opera
          prevVideo.webkitRequestFullscreen();
      } else if (prevVideo.msRequestFullscreen) { // IE/Edge
          prevVideo.msRequestFullscreen();
      }
  } else {
      // If the document is currently in fullscreen mode, exit fullscreen
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
          document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
          document.msExitFullscreen();
      }
  }
}
prevVideo.addEventListener("click", toggleFullscreen);
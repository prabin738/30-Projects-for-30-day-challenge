//step 1: get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let sliderDom = document.querySelector(".slider");
let SliderDom = sliderDom.querySelector(".slider .mainslides");
let thumbnailBorderDom = document.querySelector(".slider .cards");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".block");
let timeDom = document.querySelector(".slider .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".slider .mainslides .block");
  let thumbnailItemsDom = document.querySelectorAll(".slider .cards .block");

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    sliderDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    sliderDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    sliderDom.classList.remove("next");
    sliderDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}

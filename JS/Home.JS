///////////////////////Variables/////////////////////////
///////////////////////Preloader/////////////////////////
let Preloader = $.querySelector(".PreloaderHome");
///////////////////////Btns/////////////////////////
let btnnextSpeaker = $.querySelector(".buttonleft-speakerHome");
let btnprevSpeaker = $.querySelector(".buttonright-speakerHome");
let btnnextTv = $.querySelector(".buttonleft-TVHome");
let btnprevTV = $.querySelector(".buttonright-TVHome");
///////////////////////brand Name/////////////////////////
let speakerSlide = $.querySelector(".brand-speaker");
let TvSlide = $.querySelector(".brand-TV");
///////////////////////Gotop/////////////////////////
let Gotop = $.querySelector(".GotopHome");
///////////////////////subscription/////////////////////////
///////////////////////Preloader/////////////////////////
modal.addEventListener("scroll", Homescroll);
window.addEventListener("load", loader);
///////////////////////brand Name/////////////////////////
btnnextSpeaker.addEventListener("click", NextSlideSpeaker);
btnprevSpeaker.addEventListener("click", PrevSlideSpeaker);
btnnextTv.addEventListener("click", NextSlideTV);
btnprevTV.addEventListener("click", PrevSlideTV);
///////////////////////Gotop/////////////////////////
Gotop.addEventListener("click", topp);
///////////////////////Code/////////////////////////
function Homescroll(){
  if (modal.scrollTop >= 650) {
    Gotop.style.display = "flex";
  } else {
    Gotop.style.display = "none";
  }
}


function loader() {
  Preloader.classList.add("hidden");
  body.scrollTop = 0;
}

function NextSlideSpeaker() {
  btnnextSpeaker.style.transform = "translateX(-395px)";
  speakerSlide.style.transform = "translateX(390px)";
  btnprevSpeaker.style.transform = "translateX(-390px)";
}

function PrevSlideSpeaker() {
  btnnextSpeaker.style.transform = "translateX(0)";
  speakerSlide.style.transform = "translateX(0)";
  btnprevSpeaker.style.transform = "translateX(0)";
}

function NextSlideTV() {
  btnnextTv.style.transform = "translateX(-790px)";
  TvSlide.style.transform = "translateX(785px)";
  btnprevTV.style.transform = "translateX(-790px)";
}

function PrevSlideTV() {
  btnnextTv.style.transform = "translateX(0)";
  TvSlide.style.transform = "translateX(0)";
  btnprevTV.style.transform = "translateX(0)";
}

function topp() {
  modal.scrollTop = 0;
}

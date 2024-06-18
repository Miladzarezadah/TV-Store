let PreloaderAccesory = $.querySelector(".PreloaderAccesory");
let btnprev = $.querySelector(".buttonright-Accesory");
let btnpNext = $.querySelector(".buttonleft-Accesory");
let Advertise = $.querySelectorAll(".Advertise");
///////////////////////Gotop/////////////////////////
let Gotop = $.querySelector(".GotopAccesory");
///////////////////////subscription/////////////////////////
///////////////////////Preloader/////////////////////////
modal.addEventListener("scroll", Accesoryscroll);
window.addEventListener("load", loaderAccesory);
btnpNext.addEventListener("click", NextSlide);
btnprev.addEventListener("click", prevSlide);
Gotop.addEventListener("click",topp)
///////////////////////Code/////////////////////////
function loaderAccesory() {
  PreloaderAccesory.classList.add("hidden");
}

function Accesoryscroll(){
  if (modal.scrollTop >= 450) {
    Gotop.style.display = "flex";
  } else {
    Gotop.style.display = "none";
  }
}

function NextSlide() {
  for (let i = 0; i < Advertise.length; i++)
    if (i == 0) {
      Advertise[i].classList.add("active");
    } else if (i == 1) {
      btnpNext.classList.add("btnactive");
      btnprev.classList.remove("btnactive");
      Advertise[i - 1].classList.remove("active");
      Advertise[i].classList.add("animationleft");
      Advertise[i].classList.add("active");
      return true;
    }
}
function prevSlide() {
  btnprev.classList.add("btnactive");
  btnpNext.classList.remove("btnactive");
  if (Advertise[0].className == "Advertise") {
    Advertise[0].classList.add("animationright");
  }
  Advertise[1].classList.remove("active");
  Advertise[0].classList.add("active");
}

function topp() {
  modal.scrollTop = 0;
}

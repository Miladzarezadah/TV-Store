let PreloaderSpeaker = $.querySelector(".PreloaderSpeaker");
let btnprev = $.querySelector(".buttonright-Speaker");
let btnpNext = $.querySelector(".buttonleft-Speaker");
let Advertise = $.querySelectorAll(".Advertise");
///////////////////////Gotop/////////////////////////
let Gotop = $.querySelector(".GotopSpeaker");
///////////////////////subscription/////////////////////////
///////////////////////Preloader/////////////////////////
modal.addEventListener("scroll", speakerscroll);
window.addEventListener("load", loaderSpeaker);
btnpNext.addEventListener("click", NextSlide);
btnprev.addEventListener("click", prevSlide);
Gotop.addEventListener("click",topp)
///////////////////////Code/////////////////////////
 function loaderSpeaker() {
  PreloaderSpeaker.classList.add("hidden");
}

function speakerscroll(){
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
      btnpNext.classList.add("btnactive")
      btnprev.classList.remove("btnactive")
      Advertise[i - 1].classList.remove("active");
      Advertise[i].classList.add("animationleft");
      Advertise[i].classList.add("active");
      return true;
    }
}
function prevSlide() {
  btnprev.classList.add("btnactive")
  btnpNext.classList.remove("btnactive")
  if(Advertise[0].className == "Advertise"){
  Advertise[0].classList.add("animationright");
  }
  Advertise[1].classList.remove("active");
  Advertise[0].classList.add("active");
}

function topp() {
    modal.scrollTop = 0;
  }
  
let titles = document.querySelectorAll(".title");

titles.forEach(function(title){
title.addEventListener("click",function(){
    title.nextElementSibling.classList.toggle("open");
    title.querySelector(".ai-chevron-up").classList.toggle("open")
    title.querySelector(".ai-chevron-down").classList.toggle("open")
})
})
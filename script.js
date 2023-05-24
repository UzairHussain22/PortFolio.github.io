window.onload=function(){
const hamburger = document.querySelector(".hamburger");
const navi = document.querySelector(".navbar");


hamburger.addEventListener("click", () => {
    
    hamburger.classList.toggle("active");
    navi.classList.toggle("hide");
  })
 
  }
const hamburger = document.querySelector(".hamburger");
const menuLinks = document.querySelector(".menu");

hamburger.addEventListener("click", function(event){
	hamburger.classList.toggle("active");
	menuLinks.classList.toggle("active");
})
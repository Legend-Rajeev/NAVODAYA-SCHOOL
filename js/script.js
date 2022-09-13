window.onscroll = function() {myFunction()};

var dropdown = document.querySelectorAll("nav ul li ul");
console.log(dropdown);
var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;
console.log(sticky);

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    dropdown.forEach(function(item){
        item.style.top = "3rem";
    });
  } else {
    navbar.classList.remove("sticky");
    dropdown.forEach(function(item){
        item.style.top = "13rem";
    });
  }
}

  
// ========== Toggle Navigation =========
let toggle_open = document.querySelector("#toggle-open");
let toggle_close = document.querySelector("#toggle-close");
let nav_ul = document.querySelector("nav ul");

toggle_open.addEventListener("click", function(){
  nav_ul.classList.add("toggle_animation");
  toggle_open.setAttribute("class", "fa fa-bars");
  toggle_close.setAttribute("class", "fa fa-times d-block");
})

toggle_close.addEventListener("click", function(){
  nav_ul.classList.remove("toggle_animation");
  toggle_open.setAttribute("class", "fa fa-bars d-block");
  toggle_close.setAttribute("class", "fa fa-times");
})

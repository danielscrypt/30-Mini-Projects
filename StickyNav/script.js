window.onscroll = function() {myFunction()};

const navbar = document.querySelector(".nav");
const sticky = navbar.offsetTop + 300;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("active")
  } else {
    navbar.classList.remove("active");
  }

}


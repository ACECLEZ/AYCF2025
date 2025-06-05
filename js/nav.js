let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('#navbar').classList.remove('hide');
  } else {
    // user has scrolled down
    document.querySelector('#navbar').classList.add('hide');
  }
  if(currentScrollPos==0) { 
    this.document.getElementById("navbar").style.borderColor = "white";
  } else {
    document.getElementById("navbar").style.borderColor = "#dbd5d5";
  }
  // update previous scroll position
  prevScrollPos = currentScrollPos;
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function openNav() {
  document.getElementById("overlay-navbar").style.width = "100%";
  document.getElementById("overlay-navbar").style.padding = "5vw";
  document.getElementById("overlay-navbar").style.left = "0";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("overlay-navbar").style.width = "0%";
  document.getElementById("overlay-navbar").style.padding = "5vw 0";
  document.getElementById("overlay-navbar").style.left = "-50vw";
}

function toggleDropdown() {
  var x= document.getElementById("overlay-dropdown-content")
  if(x.style.height=="20vh"){
    x.style.height = "0%";
    x.style.padding ="0";
    x.style.position = "fixed";
  } else {
    x.style.height ="20vh";
    x.style.padding = "1vh 10vw"
    x.style.position = "relative";
  }
}

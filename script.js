window.onscroll = function() {myFunction()};
var navbar = document.getElementById("headerC");
var navbar2 = document.getElementById("hnavbarC");
var navbar3 = document.getElementById("vnavbarC");
var zmBtn = document.getElementById("zmBtn");
var zmBtn2 = document.getElementById("zmBtn2");
var show = document.getElementById("show");
var hide = document.getElementById("hide");
var topBtn = document.getElementById("topBtn");
var charA = document.getElementById("charA");
var settA = document.getElementById("settA");
var plotA = document.getElementById("plotA");
var writA = document.getElementById("writA");
var topBtn = document.getElementById("topBtn");

var sticky = navbar.offsetTop;
var sticky2 = navbar3.offsetTop;

zmBtn.onclick = function() {
  show.style.display = "none";
  hide.style.display = "block";
}
zmBtn2.onclick = function() {
  show.style.display = "block";
  hide.style.display = "none";
}

/*if ((window.innerWidth) < 791) {
  topBtn.style.display = "block";
} else {
  topBtn.style.display = "none";
}*/

function myFunction() {
if ((window.innerWidth) < 791) {
  //no sticky for the navbars, but for the "top" button
  if (window.pageYOffset >= sticky2) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
else if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
  navbar2.style.display = "none";
} else {
  navbar.classList.remove("sticky");
  navbar2.style.display = "block";
}
}

//There was an issue with the h-navbar not scrolling enough,
//but it somehow works by adding the functions below...
charA.onclick = function() {
  //window.scrollTo(,0);
}
settA.onclick = function() {
  //window.scrollTo(,0);
}
plotA.onclick = function() {
  //window.scrollTo(,0);
}
writA.onclick = function() {
  //window.scrollTo(,0);
}
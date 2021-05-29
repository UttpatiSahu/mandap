var slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.position = 'fixed';
        document.body.style.top = '-${window.scrollY}px';
    }
}
function myFunction() {
    document.getElementById("2").style.display = "block"
    document.getElementById("dvImage").style.display = "none"
    document.getElementById("2").style.backgroundColor = "white"
}
function windowImage() {
  document.getElementById("box1").style.display = "block"
  document.getElementById("box2").style.display = "block"
  document.getElementById("box3").style.display = "block"
  document.getElementById("box4").style.display = "block"
  document.getElementById("2").style.display = "none"
  document.getElementById("dvImage").style.display = "none"
  document.getElementById("box").style.backgroundColor = "white"
  document.getElementById("box2").style.backgroundColor = "white"
  document.getElementById("box3").style.backgroundColor = "white"
}

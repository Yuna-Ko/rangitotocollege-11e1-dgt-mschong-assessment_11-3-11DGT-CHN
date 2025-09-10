let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("CARD");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "inline-block";
}

function studydropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
function topicdropdown() {
  document.getElementById("myDropdownt").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtnn')) {
  var myDropdown = document.getElementById("myDropdownt");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
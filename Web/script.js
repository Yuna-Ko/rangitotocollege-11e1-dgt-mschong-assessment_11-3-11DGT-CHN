var coll = document.getElementsByClassName("NAVCOLLAP");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
    }
  });
}


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
  let ansslides = document.getElementsByClassName("ANSCARD");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "inline-block";
  if (n > ansslides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = ansslides.length}
  for (i = 0; i < ansslides.length; i++) {
    ansslides[i].style.display = "none";
  }
  ansslides[slideIndex-1].style.display = "inline-block";
}
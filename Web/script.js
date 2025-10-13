let cover  = document.getElementById('cover');
cover.style.display = "inline-block";

function toggle(){
  if (cover.style.display == "inline-block"){
    cover.style.display = "none";
    change();
  }
}

let c = 1, cc = 1;
const count = document.getElementById("NUM");
function inc() {
  if (c < 20){
    c = c + cc;
  } else{
    c = 1;
  }
  update();
}
function dec() {
  if (c > 1){
    c = c - cc;
  } else{
    c = 20;
  }
  update();
}
function update(){
  count.textContent = c;     
}

//Based off W3school's collapsible content tutorial
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

//Based off W3school's slides tutorial
let slides = document.getElementsByClassName("CARD");
let ansslides = document.getElementsByClassName("ANSCARD");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  cover.style.display = "inline-block";
  slides.style.display = "none";
  ansslides.style.display = "none";

}

function currentSlide(n) {
  showSlides(slideIndex = n);
    cover.style.display = "inline-block";
    slides.style.display = "none";
    ansslides.style.display = "none";
}

function showSlides(n) {
  let i;
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
}
function change(){
    ansslides[slideIndex-1].style.display = "inline-block";
  }
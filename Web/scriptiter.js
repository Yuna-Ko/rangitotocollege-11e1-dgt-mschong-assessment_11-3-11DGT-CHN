let c = 1, cc = 1;

const count = document.getElementById("NUM");

function inc(){
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
let anscont = document.getElementById("anstxtcont");
let anstext = document.getElementsByClassName("ANSTEXT");

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
  anscont.style.display = "none";
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
anscont.style.display = "none";

function showans(){
    if(anscont.style.display == "none"){
        anscont.style.display = "inline-block";
        anstext[slideIndex-1].style.display = "inline-block";
    }else{
        anscont.style.display = "none";
    }
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "inline-block";

  if (n > anstext.length) {slideIndex = 1}
  if (n < 1) {slideIndex = anstext.length}
  for (i = 0; i < anstext.length; i++) {
    anstext[i].style.display = "none";
  }
}

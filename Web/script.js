function submit(){
  var qos= parseInt(document.querySelector('input[name="Q1"]:checked').value);
  var qts= parseInt(document.querySelector('input[name="Q2"]:checked').value);
  var checkth = document.querySelectorAll(".Q3:checked");
  var thans = [];
  var checkf = document.querySelectorAll(".Q4:checked");
  var fans = [];
  var qfis= parseInt(document.querySelector('input[name="Q5"]:checked').value);
  var qss= parseInt(document.querySelector('input[name="Q6"]:checked').value);
  checkth.forEach(function(element){thans.push(element.value);});
  if (!thans.includes("thwrongo") && !thans.includes("thwrongt") && !thans.includes("thwrongth") && thans.includes("thrighto")){
    var qths = 1;
  } else{
    qths = 0;
  }

  checkf.forEach(function(element){fans.push(element.value);});
  if (!fans.includes("fwrongo") && !fans.includes("fwrongt") && fans.includes("frighto") && fans.includes("frightt")){
    var qfs = 1;
  } else{
    qfs = 0;
  }

  total = qos + qts + qths + qfs + qfis + qss;

  if(total > 3){
    alert("Congrats, your score is: " + total + "/6. What an organic chemistry whizz!");
  }else{
    alert("Your score is: " + total + "/6. Maybe it's nigh time you hit the books?");
  }
}

function submitni(){
  var qos= parseInt(document.querySelector('input[name="Q1"]:checked').value);
  var qts= parseInt(document.querySelector('input[name="Q2"]:checked').value);
  var checkth = document.querySelectorAll(".Q4:checked");
  var thans = [];
  var checkf = document.querySelectorAll(".Q3:checked");
  var fans = [];
  var qfis= parseInt(document.querySelector('input[name="Q5"]:checked').value);
  var qss= parseInt(document.querySelector('input[name="Q6"]:checked').value);
  checkth.forEach(function(element){thans.push(element.value);});
  if (!thans.includes("fwrongo") && !thans.includes("fwrongt") && !thans.includes("fwrongth") && thans.includes("frighto")){
    var qths = 1;
  } else{
    qths = 0;
  }

  checkf.forEach(function(element){fans.push(element.value);});
  if (!fans.includes("thwrongo") && !fans.includes("thwrongt") && fans.includes("thrighto") && fans.includes("thrightt")){
    var qfs = 1;
  } else{
    qfs = 0;
  }

  total = qos + qts + qths + qfs + qfis + qss;

  if(total > 3){
    alert("Congrats, your score is: " + total + "/6. What an organic chemistry whizz!");
  }else{
    alert("Your score is: " + total + "/6. Maybe it's nigh time you hit the books?");
  }
}

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
var collsub = document.getElementsByClassName("subnavcollap");
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

for (i = 0; i < collsub.length; i++) {
  collsub[i].addEventListener("click", function() {
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
let icon = document.getElementById("ansicon");

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
  anscont.style.display = "none";
  icon.style.display = "none"
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
anscont.style.display = "none";
icon.style.display = "none";

function showans(){
    if(anscont.style.display == "none"){
      icon.style.display = "inline-block";
      anscont.style.display = "inline-block";
      anstext[slideIndex-1].style.display = "inline-block";
    }else{
      anscont.style.display = "none";
      icon.style.display = "none"
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

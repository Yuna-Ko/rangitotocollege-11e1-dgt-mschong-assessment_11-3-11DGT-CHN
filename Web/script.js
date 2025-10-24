function submit(){
  var qos= parseInt(document.querySelector('input[name="Q1"]:checked').value);//Check the value of the checked answer in Q1. If i'ts correct, the value should be 1, otherwise 0.
  var qts= parseInt(document.querySelector('input[name="Q2"]:checked').value);
  var checkth = document.querySelectorAll(".Q3:checked"); //Check for all ticked checkboxes in Q3.
  var thans = []; //The list(?) to store the ticked checkbox values.
  var checkf = document.querySelectorAll(".Q4:checked");
  var fans = [];
  var qfis= parseInt(document.querySelector('input[name="Q5"]:checked').value);
  var qss= parseInt(document.querySelector('input[name="Q6"]:checked').value);
  checkth.forEach(function(element){thans.push(element.value);}); 
  if (!thans.includes("thwrongo") && !thans.includes("thwrongt") && !thans.includes("thwrongth") && thans.includes("thrighto")){ //If the answer doens't include any wrong answers and contained the correct ones. Give one point, otherwise i'ts 0.
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

  total = qos + qts + qths + qfs + qfis + qss; //Add up the points to collect the total points.

  if(total > 3){ //If score is above 3 points, give a positive message.
    alert("Congrats, your score is: " + total + "/6. What a chemistry whizz!");
  }else{ //If score is 3 points or below, give a deeply encouraging message!
    alert("Your score is: " + total + "/6. Maybe it's nigh time you hit the books?");
  }
}

function submitni(){ //Same thing as above code, I simply needed a seperate function of the slight order change in answers.
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

function inc(){ //If the inc function is call, increase the countter by one and call the update function.
  if (c < 20){ 
    c = c + cc;
  } else{//If counter is greater than 20, go back to 1.
    c = 1;
  }
  update();
}

function dec() { //If the dec function is call, decrease the counter by one and call the update function.
  if (c > 1){
    c = c - cc;
  } else{
    c = 20; //if counter is less than 1, go back to 20.
  }
  update();
}

function update(){ //Updates the visualy conter (in html) to the value of c / current counter.
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
    if (content.style.display === "grid") { //If content is displted when the relevant button is clicked, hide it. Otherwise, show it.
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
    if (content.style.display === "grid") { //Same idea as the above code.
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
showSlides(slideIndex);//Set the shown slide to 1 initially.


function plusSlides(n) { //When next/prev buttons are clicked, change the slide by n (1 or -1).
  showSlides(slideIndex += n);
  anscont.style.display = "none";
  icon.style.display = "none"
}

function currentSlide(n) { //
  showSlides(slideIndex = n);
}
anscont.style.display = "none";
icon.style.display = "none";

function showans(){
    if(anscont.style.display == "none"){//If the answer is hidden, set it to be shown alongside relevant answer content.
      icon.style.display = "inline-block";
      anscont.style.display = "inline-block";
      anstext[slideIndex-1].style.display = "inline-block";
    }else{
      anscont.style.display = "none"; //Hide if otherwise.
      icon.style.display = "none"
    }
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1} //If n is greater than the number of slides, set slideIndex to 1.
  if (n < 1) {slideIndex = slides.length} //If n is less than 1, set slideIndex to the last slide.
  for (i = 0; i < slides.length; i++) { //Hides irrelevant slides initially.
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "inline-block"; //Display the relevant slide.

  if (n > anstext.length) {slideIndex = 1} //Same idea as above but for answer text.
  if (n < 1) {slideIndex = anstext.length}
  for (i = 0; i < anstext.length; i++) {
    anstext[i].style.display = "none";
  }
}

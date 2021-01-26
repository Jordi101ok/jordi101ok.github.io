var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");

function currentSlide1() {
    slides[0].style.display = "block";
    slides[1].style.display = "none";
}

function currentSlide2() {
    slides[0].style.display = "none";
    slides[1].style.display = "block";
}

function plusSlidesNext() {
    if(slides[1].style.display = "none"){
        slides[1].style.display = "block";
        slides[0].style.display = "none";
    }
    else {
        slides[1].style.display = "none";
        slides[0].style.display = "block";
    }
}

function plusSlidesPrev() {
    if(slides[1].style.display = "none") {
        slides[1].style.display = "block";
        slides[0].style.display = "none";
    }
    else {
        slides[1].style.display = "none";
        slides[0].style.display = "block";
    }
}
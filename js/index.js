// The function open and close contact form

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById('myForm').style.display = "none";
}

// Displays first image in slideshow when page loads
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { //Changes slide when arrows clicked
    showSlides(slideIndex += n );
}

//Changes slide when dots clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Code to allow clicking off form to close it.

//First add an event listener for clicks on site
document.addEventListener("click", function(event) {
    //Here stats that IF there's a click on cancel button OR anywhere but contact form AND no click on PopUp button or Navbar button then calls closeForm();
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false)
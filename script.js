// ===============================
// A CORE SECURITY JAVASCRIPT
// ===============================


// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// CLOSE MOBILE MENU AFTER CLICKING LINK

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// CONTACT FORM

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting A Core Security. " +
        "Your enquiry has been received."
    );

    contactForm.reset();

});


// HEADER SHADOW WHEN SCROLLING

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

/* =================================
   A CORE SECURITY HERO SLIDESHOW
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".slider-dots .dot");

    if (slides.length === 0) {
        return;
    }

    let currentSlide = 0;

    function showSlide(index) {

        // Remove active from all slides
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        // Remove active from all dots
        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        // Activate selected slide
        slides[index].classList.add("active");

        // Activate selected dot
        if (dots[index]) {
            dots[index].classList.add("active");
        }

        currentSlide = index;
    }


    // Automatically change photo every 5 seconds
    function nextSlide() {

        let next = currentSlide + 1;

        if (next >= slides.length) {
            next = 0;
        }

        showSlide(next);
    }


    // Start automatic slideshow
    setInterval(nextSlide, 5000);


    // Allow users to click the dots
    dots.forEach((dot, index) => {

        dot.addEventListener("click", function () {
            showSlide(index);
        });

    });

});

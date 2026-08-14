const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Message received successfully!");

    contactForm.reset();
});
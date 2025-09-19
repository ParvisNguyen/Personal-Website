(function() {
    emailjs.init("f7hgmtr8pKHaJz_D1"); 
})();

// Handle form submission
window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

    // Send form using EmailJS
    emailjs.sendForm("OutlookEmail", "template_mznwwvr", this)
        .then(() => {
            alert("Your message was sent successfully!");
            document.getElementById("contact-form").reset(); // clear form after send
        }, (error) => {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS error:", error);
        });
    });
});
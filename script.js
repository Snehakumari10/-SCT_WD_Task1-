// Change navbar style on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

  function handleSubmit(event) {
    event.preventDefault(); // prevent actual form submission

    const name = document.querySelector('.contact-form input[type="text"]').value.trim();
    const email = document.querySelector('.contact-form input[type="email"]').value.trim();

    if (name && email) {
      // Redirect to feedback submission page (you can create feedback.html)
      window.location.href = "feedback.html";
    } else {
      alert("Please fill in both your name and email.");
    }
  }







// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove("active"));

      // Add active class to clicked link
      link.classList.add("active");

      // Scroll to section smoothly
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Contact form submission
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Gather form data
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    // Basic validation
    if (!name || !email || !phone) {
      displayMessage("Please fill in all fields.", "error");
      return;
    }

    if (!validateEmail(email)) {
      displayMessage("Please enter a valid email address.", "error");
      return;
    }

    if (!validatePhone(phone)) {
      displayMessage("Please enter a valid phone number (digits and dashes only).", "error");
      return;
    }

    // Simulate sending form data (could be connected to backend later)
    displayMessage("Sending message...", "info");

    setTimeout(() => {
      displayMessage(`Thank you, ${name}! Your message has been sent successfully.`, "success");
      form.reset();
    }, 1500);
  });

  // Helper to display message below form
  function displayMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.style.color = type === "error" ? "red" : type === "success" ? "green" : "#333";
  }

  // Email regex validation
  function validateEmail(email) {
    // Simple regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  // Phone validation (only digits and dashes)
  function validatePhone(phone) {
    const re = /^[0-9\-]+$/;
    return re.test(phone);
  }
});

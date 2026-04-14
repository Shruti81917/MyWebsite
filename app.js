// Button click animation
function animateButtonClick(button) {
  button.classList.add("button-clicked");
  setTimeout(() => {
      button.classList.remove("button-clicked");
  }, 300);
}

// Attach click event listeners to hero buttons if they exist
const viewWorkBtn = document.querySelector(".cc-btn");
const contactBtn = document.querySelector(".lc-btn");

if (viewWorkBtn) {
  viewWorkBtn.addEventListener("click", () => {
      animateButtonClick(viewWorkBtn);
      window.location.href = "resume.html";
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
      animateButtonClick(contactBtn);
      window.location.href = "projects.html";
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
      }
  });
});
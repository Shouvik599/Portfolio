const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.innerHTML = "☰";
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));


// Typing effect logic
const typingElement = document.getElementById("typing-text");

if (typingElement) {
  const text = typingElement.textContent.trim();
  typingElement.textContent = "";

  let index = 0;

  function typeEffect() {
  if (index < text.length) {
    const char = text.charAt(index);
    typingElement.textContent += char;
    index++;

    let delay = 25;

    if (char === "," || char === ".") delay = 200;
    if (char === " ") delay = 10;

    setTimeout(typeEffect, delay);
  }
}

  typeEffect();
}


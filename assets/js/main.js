window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
});

function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

const body = document.querySelector("body");

// Always force dark mode
document.body.classList.add("dark");

// Ensure dark mode stays enabled even if someone tries to remove it
function enforceDarkMode() {
  if (!document.body.classList.contains("dark")) {
    document.body.classList.add("dark");
  }
}

// Check periodically to ensure dark mode stays enabled
setInterval(enforceDarkMode, 1000);

// Also check when DOM content is loaded
document.addEventListener("DOMContentLoaded", enforceDarkMode);

window.addEventListener('DOMContentLoaded', function() {
  // VANTA.NET code removed

  // The 3D spheres background is now handled by background.js
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function navigateTo(url) {
  window.open(url, "_blank");
}

window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.15)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

var typingEffect = new Typed(".typedText", {
  strings: ["Defender", "Attacker", "Ethical Hacker", "Security Expert"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".testimonial-box", { interval: 200 });
sr.reveal(".certificate-box", { interval: 200 });
sr.reveal(".top-header", {});
sr.reveal("#back-to-top", { delay: 500 });

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
  (function () {
    emailjs.init("w8BfjZVyPyH_FkK-W");

    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span class="code-brackets">&lt;</span><span class="code-text">Sending...</span><span class="code-brackets">/&gt;</span>`;
        submitBtn.disabled = true;

        emailjs.sendForm("service_45de1ww", "template_9427zgs", this).then(
          function () {
            formStatus.textContent = "// Message sent successfully!";
            formStatus.className = "form-status success";

            contactForm.reset();

            setTimeout(() => {
              submitBtn.innerHTML = originalBtnText;
              submitBtn.disabled = false;

              setTimeout(() => {
                formStatus.className = "form-status";
              }, 5000);
            }, 2000);
          },
          function (error) {
            console.error("EmailJS error:", error);
            formStatus.textContent =
              "/* Error: " + (error.text || "Failed to send message") + " */";
            formStatus.className = "form-status error";

            setTimeout(() => {
              submitBtn.innerHTML = originalBtnText;
              submitBtn.disabled = false;

              setTimeout(() => {
                formStatus.className = "form-status";
              }, 5000);
            }, 2000);
          }
        );
      });
    }
  })();

  document.body.style.transition =
    "background-color 0.5s ease, color 0.5s ease";

  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    });

    if (document.readyState === "complete") {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }
  }

  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }














});




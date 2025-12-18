// ===================================
// HNCC MBA - Main JavaScript
// Interactive Features & Animations
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  // ===================================
  // Mobile Menu Toggle
  // ===================================
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      this.classList.toggle("active");
    });
  }

  // Mobile Dropdown Toggle
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    if (toggle) {
      toggle.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle("active");
        }
      });
    }
  });

  // ===================================
  // Sticky Header on Scroll
  // ===================================
  const mainHeader = document.querySelector(".main-header");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      mainHeader.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
    } else {
      mainHeader.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    }

    lastScroll = currentScroll;
  });

  // ===================================
  // Hero Slider
  // ===================================
  const heroSlides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    // Remove active class from all slides and dots
    heroSlides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Add active class to current slide and dot
    if (heroSlides[index]) {
      heroSlides[index].classList.add("active");
    }
    if (dots[index]) {
      dots[index].classList.add("active");
    }

    currentSlide = index;
  }

  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= heroSlides.length) {
      next = 0;
    }
    showSlide(next);
  }

  function prevSlide() {
    let prev = currentSlide - 1;
    if (prev < 0) {
      prev = heroSlides.length - 1;
    }
    showSlide(prev);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  // Event listeners for slider controls
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      stopSlideShow();
      nextSlide();
      startSlideShow();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      stopSlideShow();
      prevSlide();
      startSlideShow();
    });
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      stopSlideShow();
      showSlide(index);
      startSlideShow();
    });
  });

  // Start automatic slideshow
  if (heroSlides.length > 0) {
    startSlideShow();
  }

  // Pause on hover
  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopSlideShow);
    heroSection.addEventListener("mouseleave", startSlideShow);
  }

  // ===================================
  // Animated Counter for Stats
  // ===================================
  const statNumbers = document.querySelectorAll(".stat-number");
  let hasAnimated = false;

  function animateCounter(element) {
    const target = parseInt(element.getAttribute("data-target"));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  }

  function checkStatsInView() {
    const statsSection = document.querySelector(".stats-section");
    if (!statsSection || hasAnimated) return;

    const rect = statsSection.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isInView) {
      hasAnimated = true;
      statNumbers.forEach((stat) => {
        animateCounter(stat);
      });
    }
  }

  window.addEventListener("scroll", checkStatsInView);
  checkStatsInView(); // Check on load

  // ===================================
  // Scroll to Top Button
  // ===================================
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ===================================
  // Smooth Scroll for Anchor Links
  // ===================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href !== "") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // ===================================
  // Intersection Observer for Fade-in Animations
  // ===================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".program-card, .feature-card, .news-card, .testimonial-card"
  );
  animateElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(element);
  });

  // ===================================
  // Form Validation (if forms exist)
  // ===================================
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic validation
      const inputs = form.querySelectorAll(
        "input[required], textarea[required]"
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = "#ef4444";
        } else {
          input.style.borderColor = "";
        }
      });

      if (isValid) {
        // Form is valid, you can submit it
        console.log("Form is valid");
        // form.submit(); // Uncomment to actually submit
      } else {
        alert("Please fill in all required fields");
      }
    });
  });

  // ===================================
  // Lazy Loading Images
  // ===================================
  const lazyImages = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute("data-src");
        img.removeAttribute("data-src");
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => imageObserver.observe(img));

  // ===================================
  // Active Navigation Highlighting
  // ===================================
  const navLinks = document.querySelectorAll(".nav-menu a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.parentElement.classList.add("active");
    }
  });

  // ===================================
  // Testimonials Slider (Touch Support)
  // ===================================
  const testimonialsSlider = document.querySelector(".testimonials-slider");
  if (testimonialsSlider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialsSlider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - testimonialsSlider.offsetLeft;
      scrollLeft = testimonialsSlider.scrollLeft;
    });

    testimonialsSlider.addEventListener("mouseleave", () => {
      isDown = false;
    });

    testimonialsSlider.addEventListener("mouseup", () => {
      isDown = false;
    });

    testimonialsSlider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - testimonialsSlider.offsetLeft;
      const walk = (x - startX) * 2;
      testimonialsSlider.scrollLeft = scrollLeft - walk;
    });
  }

  // ===================================
  // Search Functionality (if search exists)
  // ===================================
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", function () {
      const query = searchInput.value.trim();
      if (query) {
        console.log("Searching for:", query);
        // Implement search functionality
      }
    });

    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchBtn.click();
      }
    });
  }

  // ===================================
  // Dynamic Year in Footer
  // ===================================
  const yearElement = document.querySelector(".footer-bottom p");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = yearElement.textContent.replace(
      "2024",
      currentYear
    );
  }

  // ===================================
  // Preloader (Optional)
  // ===================================
  window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 300);
    }
  });

  // ===================================
  // Console Welcome Message
  // ===================================
  console.log(
    "%c Welcome to HNCC MBA Website ",
    "background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; font-size: 16px; padding: 10px 20px; border-radius: 5px;"
  );
  console.log("%c Developed with ❤️ ", "color: #6366f1; font-size: 12px;");
});

// ===================================
// Utility Functions
// ===================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Format number with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
// ================= FACULTY FILTER =================
const filterButtons = document.querySelectorAll(".filter-btn");
const facultyCards = document.querySelectorAll(".faculty-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    facultyCards.forEach((card) => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Research Page JS (Future-ready)
console.log("Research page loaded successfully");

// You can later add:
// - Publication filters
// - Year-wise sorting
// - Dynamic loading from JSON / API

// ================= PLACEMENT COUNTER ANIMATION =================
const counters = document.querySelectorAll(".stat-card h3");
let animated = false;

function animateCounters() {
  if (animated) return;
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 100;

    const update = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
  animated = true;
}

window.addEventListener("scroll", () => {
  const section = document.querySelector(".placement-stats");
  if (!section) return;
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    animateCounters();
  }
});
// Campus Life Page JS
console.log("Campus Life page loaded");

// Future ready for:
// - Lightbox gallery
// - Event filtering
// - Video modals

// ================= CONTACT FORM VALIDATION =================
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  formStatus.textContent = "Sending your message...";

  setTimeout(() => {
    formStatus.textContent =
      "Thank you! Your message has been sent successfully.";
    contactForm.reset();
  }, 1500);
});

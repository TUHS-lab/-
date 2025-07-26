document.addEventListener("DOMContentLoaded", () => {
    // Initialize Feather Icons with retry
    feather.replace();
    setTimeout(() => feather.replace(), 500);

    // Initialize Hero Particles
    particlesJS("hero-particles", {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#ff6b35" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: false },
                resize: true,
            }
        },
        retina_detect: true
    });

    // Tab switching with animation
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");
            if (!button.classList.contains("active")) {
                tabButtons.forEach((btn) => btn.classList.remove("active"));
                tabContents.forEach((content) => {
                    content.classList.remove("active");
                    content.style.opacity = "0";
                    content.style.transform = "translateY(20px)";
                });

                button.classList.add("active");
                const activeContent = document.getElementById(`${tabId}-tab`);
                setTimeout(() => {
                    activeContent.classList.add("active");
                    activeContent.style.opacity = "1";
                    activeContent.style.transform = "translateY(0)";
                }, 10);
            }
        });
    });

    // Animation on scroll
    const animateElements = document.querySelectorAll(
        ".section-title, .pricing-card, .domain-card, .crypto-card, .use-case-card, .feature-card, .faq-item"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    if (entry.target.classList.contains("pricing-card")) {
                        entry.target.style.transform = entry.target.classList.contains("nth-child(even)")
                            ? "translateX(0)"
                            : "translateX(0)";
                    } else if (entry.target.classList.contains("domain-card")) {
                        entry.target.style.transform = entry.target.classList.contains("nth-child(even)")
                            ? "translateX(0)"
                            : "translateX(0)";
                    } else if (entry.target.classList.contains("crypto-card")) {
                        entry.target.style.transform = "rotateY(0)";
                    } else if (entry.target.classList.contains("use-case-card") || entry.target.classList.contains("feature-card")) {
                        entry.target.style.transform = "scale(1)";
                    } else if (entry.target.classList.contains("faq-item")) {
                        entry.target.style.transform = "translateY(0)";
                    } else {
                        entry.target.style.transform = "translateY(0)";
                    }
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    animateElements.forEach((el) => observer.observe(el));

    // Server visualization animation
    const serverUnits = document.querySelectorAll(".server-unit");
    let activeIndex = 0;

    setInterval(() => {
        serverUnits.forEach((unit) => unit.classList.remove("active"));
        serverUnits[activeIndex].classList.add("active");
        activeIndex = (activeIndex + 1) % serverUnits.length;
    }, 1000);

    // Debounce function for scroll optimization
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

    // Sticky header effect
    const header = document.querySelector(".header");
    const handleScroll = debounce(() => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(10, 10, 10, 0.98)";
            header.style.borderBottomColor = "rgba(255, 255, 255, 0.2)";
        } else {
            header.style.backgroundColor = "rgba(10, 10, 10, 0.95)";
            header.style.borderBottomColor = "rgba(255, 255, 255, 0.1)";
        }
    }, 10);

    window.addEventListener("scroll", handleScroll);
});
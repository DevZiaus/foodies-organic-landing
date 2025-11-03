document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("toggled");
        nav.classList.toggle("open");
        const expanded = toggle.classList.contains("toggled");
        toggle.setAttribute("aria-expanded", expanded);
    });

    // Close menu on link click
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            toggle.classList.remove("toggled");
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", false);
        });
    });

    // Menu Link Active State Management
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.querySelectorAll("a").forEach((navLink) => {
                navLink.classList.remove("active");
            });
            link.classList.add("active");
        });
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            toggle.classList.remove("toggled");
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.querySelector(".current-year").textContent = currentYear;
});

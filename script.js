document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add("fadeIn");
    });

    const themeToggleButton = document.getElementById("theme-toggle");
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        items.forEach(item => {
            item.classList.toggle("dark");
        });
        const header = document.querySelector("header");
        header.classList.toggle("dark");
        const footer = document.querySelector("footer");
        footer.classList.toggle("dark");

    });

});
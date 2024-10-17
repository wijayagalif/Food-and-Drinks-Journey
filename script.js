document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add("fadeIn");
    });
});

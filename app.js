console.log("object");

const ham = document.querySelector("#ham")
const menu = document.querySelector("#menu")

ham.addEventListener("click", () => {
    menu.classList.toggle("hidden")


})

// added by me


document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;




    // Check if user has a preferred theme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme based on user preference
    if (prefersDarkMode) {
        body.classList.add('dark-mode');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});
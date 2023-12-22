// menu
const ham = document.querySelector("#ham");
const menu = document.querySelector("#menu");

ham.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// Listen for clicks on the document
document.addEventListener("click", (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnHam = ham.contains(event.target);

    // If the click is outside the menu and not on the ham element, hide the menu
    if (!isClickInsideMenu && !isClickOnHam) {
        menu.classList.add("hidden");
    }
});

// added by me


document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;





    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});




// scroll
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
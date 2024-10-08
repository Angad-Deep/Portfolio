function toggleMenu() {
    var menu = document.getElementById("menu");
    var icon = document.querySelector(".menu-icon");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        icon.classList.remove("active");
    } else {
        menu.style.display = "block";
        icon.classList.add("active");
    }
}
// Mobile Menu Insertion
document.addEventListener('DOMContentLoaded', function () {
    console.log('Mobile Menu script loaded');
    
    function loadExternalHTML() {
        fetch('mobile-menu.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('mob-menu').innerHTML = data;
            })
            .catch(error => console.error('Error loading external HTML:', error));
    }

    loadExternalHTML();
});
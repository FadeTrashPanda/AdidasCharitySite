function changeMenu(x) {
    var hamburger = document.getElementById("hamburgerButton");
    hamburger.classList.toggle("menu-active");
 
}
function toggleMenu() {
    var x = document.getElementById("curtain-menu");
    var body = document.querySelector("body");
 
    if (x.style.height === "100%") {
        x.style.height = "0%";
        body.style.overflowY = "scroll";
    } else {
        x.style.height = "100%";
        body.style.overflowY = "hidden";
    }
}

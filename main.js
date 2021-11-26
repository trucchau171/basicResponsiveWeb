const showMobibleBar = document.querySelector('.nav__mobile-bar');
const closeMobibleBar = document.querySelector('.nav__mobile-close');
const navMobile = document.querySelector('.nav__mobile');
const navOverlay = document.querySelector('.nav__mobile-overlay');
const navLinks = document.querySelectorAll('.nav__mobile-link');
function closeNav() {
    navMobile.classList.remove('open');
    navOverlay.classList.remove('open');
}

showMobibleBar.onclick = () => {
    navMobile.classList.add('open');
    navOverlay.classList.add('open');
}

closeMobibleBar.addEventListener('click', closeNav);
navOverlay.addEventListener('click', closeNav);

for (const navLink of navLinks) {
    navLink.addEventListener('click', closeNav);
}

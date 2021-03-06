const navSlide = () => { 
    const navBar = document.querySelector('.nav-bar');
    const menuIcon = document.getElementsByClassName('menu-icon')[0];
    const navLinks = document.getElementsByClassName('nav-link');

    menuIcon.addEventListener('click', () => {
        navBar.classList.toggle('activate-nav');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease-in-out forwards ${index / 7 + 1}s`;
            }
        });
    })
}

navSlide()
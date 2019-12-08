const burgerMenu = () =>{
    const burgerBtn = document.querySelector('.menu-button'),
        menu = document.querySelector('.popup-menu'),
        closeBtn = document.querySelector('.close-menu-btn'),
        topMenu = document.querySelector('.top-menu'),
        menuLinks = document.querySelectorAll('.popup-menu > ul > li > a'),
        breakpoint = topMenu.getBoundingClientRect().y;

    burgerBtn.addEventListener('click', () => {
        menu.style.display = "block";
    });

    closeBtn.addEventListener('click', () => {
        menu.style.display = "none";
    });

    menuLinks.forEach((elem) => {
        elem.addEventListener('click', () => {
            menu.style.display = "none";
        });
    });

    window.addEventListener('scroll', () => {
        if (document.documentElement.clientWidth <= 768) {
            if (topMenu.getBoundingClientRect().y < 0) {
                burgerBtn.closest('.top-menu').classList.add('fixed-menu__button');
            }
            if (window.scrollY < breakpoint) {
                burgerBtn.closest('.top-menu').classList.remove('fixed-menu__button');
            }
        } else if (document.documentElement.clientWidth > 769) {
            burgerBtn.closest('.top-menu').classList.remove('fixed-menu__button');
        }
    });

};

export default burgerMenu;
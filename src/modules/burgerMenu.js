const burgerMenu = () =>{
    const menuBtn = document.querySelector('.menu-button'),
        menu = document.querySelector('.popup-menu'),
        closeBtn = document.querySelector('.close-menu-btn');

        let fat = document.documentElement.clientWidth;
        if(fat >= 768){
            menuBtn.style.cssText = `
            position: fixed;
            display: inline;
            top: 0px;
            `;
        }

        const activeBurger = () => {
            if(!menu.style.display || menu.style.display === 'none'){
                menu.style.display = 'flex';
            }else{
                menu.style.display = 'none';
            }
        };

        menuBtn.addEventListener('click', activeBurger);
        closeBtn.addEventListener('click', activeBurger);
       
};
export default burgerMenu;
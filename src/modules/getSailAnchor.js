const getSailAnchor = () => {
    const anchors = document.querySelectorAll('a[href*="#"]'),
        scrollBtn = document.getElementById('totop');
    anchors.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const ourId = item.getAttribute('href');
            if (ourId == '#') {
                return false;
            }
            document.querySelector('' + ourId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    scrollBtn.addEventListener('click', () =>{
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};
  
export default getSailAnchor;
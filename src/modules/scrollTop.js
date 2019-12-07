const viewArrow = () => {
    const topArrow = document.querySelector('#totop');

    document.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop < 200) {
            topArrow.style.display = 'none';
        } else if (document.documentElement.scrollTop >= 200) {
            topArrow.style.display = 'block';
        }
    });
};

export default viewArrow;
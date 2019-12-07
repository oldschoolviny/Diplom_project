const openPopUp = () => {
    const popup = document.querySelectorAll('.popup'),
        body = document.querySelector('body'),
        callbackBtn = document.querySelectorAll('.callback-btn'),
        clubList = body.querySelector('.list');

    body.addEventListener('click', (event) => {
        let target = event.target;
        popup.toString();
        if (target.matches('.open-popup')) {
            popup[1].style.display = 'block';
        }
        callbackBtn.toString();
        if (target === callbackBtn[0]) {
            popup[0].style.display = 'block';
        }
        if (target.closest('.fixed-gift')) {
            const gift = document.querySelector('.fixed-gift');
            gift.style.display = 'none';
            popup[2].style.display = 'block';
        }

        if (target.classList.contains('close_icon') || target.matches('.overlay') || target.matches('.close-btn')) {
            popup[0].style.display = 'none';
        }
        if (target.classList.contains('close_icon') || target.matches('.overlay') || target.matches('.close-btn')) {
            popup[1].style.display = 'none';
        }
        if (target.classList.contains('close_icon') || target.matches('.overlay') || target.matches('.close-btn')) {
            popup[2].style.display = 'none';
        }

        if (target = target.closest('.club-select')){
            if(clubList.style.display === 'block'){
                clubList.style.display = 'none';
            }else{
                clubList.style.display = 'block';
            }
        }

    });

};

export default openPopUp;
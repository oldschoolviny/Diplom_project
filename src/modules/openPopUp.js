const openPopUp = () => {
    const popup = document.querySelector('.popup'),
        body = document.querySelector('body'),
        clubList = body.querySelector('.list');

    body.addEventListener('click', (event) => {
        let target = event.target;
        
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
const openPopUp = () => {
    const body = document.querySelector('body'),
        clubList = document.querySelector('.list');

    body.addEventListener('click', (event) => {
        let target = event.target;
        
        if (target = target.closest('.club-select')){
            if(clubList.style.display === 'none'){
                clubList.style.display = 'block';
            }else{
                clubList.style.display = 'none';
            }
        }
    });

};

export default openPopUp;
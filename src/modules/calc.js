const calc = () => {
    let price = document.getElementById('price-total'),
        m1 = document.getElementById('m1'),
        m2 = document.getElementById('m2'),
        m3 = document.getElementById('m3'),
        m4 = document.getElementById('m4'),
        mozaikaCheck = document.getElementById('card_leto_mozaika'),
        schelkovoCheck = document.getElementById('card_leto_schelkovo'),
        calcBlock = document.getElementById('card_order'),
        promoCode = document.getElementById('promo');

        price.textContent = '1999';
    
    const mozaikaPrice = {
        'oneMonth' : 1999,
        'sixMonth' : 9900,
        'nineMonth' : 13900,
        'twelveMonth' : 19900 

    };

    const schelkovoPrice = {
        'oneMonth' : 2999,
        'sixMonth' : 14990,
        'nineMonth' : 21990,
        'twelveMonth' : 24990

    };

    calcBlock.addEventListener('change', () => {
        if(m1.checked && mozaikaCheck.checked){
            price.textContent = mozaikaPrice.oneMonth;
        }else if(m1.checked && mozaikaCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(mozaikaPrice.oneMonth - (mozaikaPrice.oneMonth / 100 * 30));
        }
        
        if(m1.checked && schelkovoCheck.checked){
            price.textContent = schelkovoPrice.oneMonth;
        }else if(m1.checked && schelkovoCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(schelkovoPrice.oneMonth - (schelkovoPrice.oneMonth / 100 * 30));
        }

        if(m2.checked && mozaikaCheck.checked){
            price.textContent = mozaikaPrice.sixMonth;
        }else if(m2.checked && mozaikaCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(mozaikaPrice.sixMonth - (mozaikaPrice.sixMonth / 100 * 30));
        }

        if(m2.checked && schelkovoCheck.checked){
            price.textContent = schelkovoPrice.sixMonth;
        }else if(m2.checked && schelkovoCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(schelkovoPrice.sixMonth - (schelkovoPrice.sixMonth / 100 * 30));
        }

        if(m3.checked && mozaikaCheck.checked){
            price.textContent = mozaikaPrice.nineMonth;
        }else if(m3.checked && mozaikaCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(mozaikaPrice.nineMonth - (mozaikaPrice.nineMonth / 100 * 30));
        }

        if(m3.checked && schelkovoCheck.checked){
            price.textContent = schelkovoPrice.nineMonth;
        }else if(m3.checked && schelkovoCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(schelkovoPrice.nineMonth - (schelkovoPrice.nineMonth / 100 * 30));
        }

        if(m4.checked && mozaikaCheck.checked){
            price.textContent = mozaikaPrice.twelveMonth;
        }else if(m4.checked && mozaikaCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(mozaikaPrice.twelveMonth - (mozaikaPrice.twelveMonth / 100 * 30));
        }
        
        if(m4.checked && schelkovoCheck.checked){
            price.textContent = schelkovoPrice.twelveMonth;
        }else if(m4.checked && schelkovoCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent= Math.floor(schelkovoPrice.twelveMonth - (schelkovoPrice.twelveMonth / 100 * 30));
        }

    });
};

export default calc;
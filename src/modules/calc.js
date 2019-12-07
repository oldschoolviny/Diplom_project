const calc = () => {
    let price = document.getElementById('price-total'),
        m1 = document.getElementById('m1'),
        m2 = document.getElementById('m2'),
        m3 = document.getElementById('m3'),
        m4 = document.getElementById('m4'),
        mozaikaCheck = document.getElementById('card_leto_mozaika'),
        schelkovoCheck = document.getElementById('card_leto_schelkovo'),
        calcBlock = document.getElementById('card_order'),
        promoCode = document.getElementById('promo'),
        discount = 0.3;

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
        }else if(m1.checked && schelkovoCheck.checked){
            price.textContent = schelkovoPrice.oneMonth;
        }
        
        if(m1.checked && mozaikaCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(mozaikaPrice.oneMonth - (mozaikaPrice.oneMonth * discount));
        }else if(m1.checked && schelkovoCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(schelkovoPrice.oneMonth - (schelkovoPrice.oneMonth * discount));
        }

        if(m2.checked && mozaikaCheck.checked){
            price.textContent = mozaikaPrice.sixMonth;
        }else if(m2.checked && schelkovoCheck.checked){
            price.textContent = schelkovoPrice.sixMonth;
        }

        if(m2.checked && mozaikaCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(mozaikaPrice.sixMonth - (mozaikaPrice.sixMonth * discount));
        }else if(m2.checked && schelkovoCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(schelkovoPrice.sixMonth - (schelkovoPrice.sixMonth * discount));
        }

        if(m3.checked && mozaikaCheck.checked){
            price.textContent = mozaikaPrice.nineMonth;
        }else if(m3.checked && schelkovoCheck.checked){
            price.textContent = schelkovoPrice.nineMonth;
        }
        
        if(m3.checked && mozaikaCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(mozaikaPrice.nineMonth - (mozaikaPrice.nineMonth * discount));
        }else if(m3.checked && schelkovoCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(schelkovoPrice.nineMonth - (schelkovoPrice.nineMonth * discount));
        }

        if(m4.checked && mozaikaCheck.checked){
            price.textContent = mozaikaPrice.twelveMonth;
        }else if(m4.checked && schelkovoCheck.checked){
            price.textContent = schelkovoPrice.twelveMonth;
        }
        
        if(m4.checked && mozaikaCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent = Math.floor(mozaikaPrice.twelveMonth - (mozaikaPrice.twelveMonth * discount));
        }else if(m4.checked && schelkovoCheck.checked && promoCode.value === 'ТЕЛО2019'){
            price.textContent= Math.floor(schelkovoPrice.twelveMonth - (schelkovoPrice.twelveMonth * discount));
        }

    });
};

export default calc;
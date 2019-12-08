const otherForm = () => {
    const bannerForm = document.getElementById('banner-form'),
        cardForm = document.getElementById('card_order'),
        popupThanks = document.getElementById('thanks'),
        formOne = document.getElementById('form1'),
        formTwo = document.getElementById('form2'),
        checkbox = document.querySelectorAll('.checkbox'),
        bodyFormEvent = document.body;
 
    bodyFormEvent.addEventListener('input', (event) => {
        let target = event.target;

        if (target.classList.contains('name_input')) {
            target.value = target.value.replace(/[^А-яа-я\s]/, '');
        }
        if (target.classList.contains('phone_input')) {
            target.value = target.value.replace(/[^0-9\\+]/, '');
        }
    });

    const sendForm = (ourForm) => {
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            uncheckMessage = 'Необходимо подтвердить согласие на обработку данных!';

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
        font-size: 16px;
        color: #FF0000;
        `;

        ourForm.addEventListener('submit', (event) => {
            event.preventDefault();
            ourForm.appendChild(statusMessage);
            const formData = new FormData(ourForm);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            statusMessage.textContent = loadMessage;

            checkbox.toString();
            
            function klhjgg(ourCheckbox) {
                if (ourCheckbox) {
                    postData(body)
                        .then((respons) => {
                            if (respons.status !== 200) {
                                throw new Error('Status network now 200');
                            }
                            popupThanks.style.display = 'block';
                        })
                        .catch((error) => {
                            statusMessage.textContent = errorMessage;
                            console.error(error);
                        })
                        .then((respons) => {
                            ourForm.reset();
                            statusMessage.textContent = '';
                        });

                } else if (!ourCheckbox) {
                    statusMessage.textContent = uncheckMessage;
                }
            }
            if (ourForm === bannerForm) {
                klhjgg(checkbox[1].checked);
            }
            if (ourForm === cardForm) {
                klhjgg(checkbox[0].checked);
            }
            if (ourForm === formOne) {
                klhjgg(checkbox[2].checked);
              }
              if (ourForm === formTwo) {
                klhjgg(checkbox[3].checked);
              }

        });

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };
    };
    sendForm(bannerForm);
    sendForm(cardForm);
};

export default otherForm;
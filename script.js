const openPopUp = document.getElementById('open__popup');
const closePopUp = document.getElementById('popup__close');
const popUp = document.getElementById('popup')

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);

function getFormValue(event) {
    event.preventDefault();

    data = form.querySelector('[name="data"]'), 
    email = form.querySelector('[name="email"]'), 
    nam = form.querySelector('[name="nams"]'), 
    plan = form.querySelector('[name="surname"]'); 
    telephone = form.querySelector('[name="telephone"]'); 
    cards = form.querySelector('[name="cards"]');
    data__cards = form.querySelector('[name="data__cards"]');
    cvv__cards = form.querySelector('[name="cvv__cards"]');
    terms = form.querySelector('[name="terms"]')
}

    const data = {
        data: data.value,
        email: email.value,
        nams: nams.value,
        surname: surname.value,
        telephone: telephone.value,
        cards: cards.value,
        data__cards: data__cards.value,
        cvv__cards: cvv__cards.value,
        terms: terms.value
    };

    console.log(data);





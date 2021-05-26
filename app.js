const areaForm = document.querySelector('.form');
const numberOfCard = document.querySelector('.number');
const namePrintedOnTheCard = document.querySelector('.name');
const expirationDate = document.querySelector('.expiration-date');
const cvvEvent = document.querySelector('.cvv');
const cvvCard = document.querySelector('.cvv-back');
const flipCard = document.querySelector('.card');
const btn = document.querySelector('.btn');

areaForm.addEventListener('keyup', event => {
    event.preventDefault();

    const nameCard = areaForm.name.value;
    const numberCard = areaForm.number.value;
    const date = areaForm.date.value;
    const cvv = areaForm.cvv.value;

    namePrintedOnTheCard.innerHTML = nameCard;
    numberOfCard.innerHTML = numberCard;
    expirationDate.innerHTML = date;
    cvvCard.innerHTML = cvv;

    setTimeout(() => {
        if (cvv.length === 3) {
            flipCard.classList.add('flip');
        }
    }, 1500);
});

cvvEvent.addEventListener('click', () => {
    flipCard.classList.remove('flip');
});
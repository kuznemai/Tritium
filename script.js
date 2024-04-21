// Плавное появление элементов
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}


//анимация

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateScrollingElements() {
    const els = document.querySelectorAll('.element-to-animate');
    els.forEach((elem) => {
        if (isElementInViewport(elem)) {
        elem.classList.add('animated');
    }
});
}

document.addEventListener('DOMContentLoaded', animateScrollingElements);
window.addEventListener('scroll', animateScrollingElements);



// Аккордеон
function accordion() {
    let accordionElems = document.getElementsByClassName("accordion");
    let emptyArr;
    for (let i = 0; i < accordionElems.length; i++) {
        accordionElems[i].addEventListener('click', function () {
            this.classList.toggle("active");
            this.parentElement.classList.toggle("active");


            let pannel = this.nextElementSibling;
            if (pannel.style.display === "block") {
                pannel.style.display = "none";
            } else {
                pannel.style.display = "block";
            }
        });
    }
}

accordion();



//////////Form

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Здесь будет код для отправки данных на сервер

    alert('Сообщение отправлено!');
    this.reset();
});









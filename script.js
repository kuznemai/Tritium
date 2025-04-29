// Плавное появление элементов (fade-in)
function onEntry(entry, observer) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('fade-in-visible');
            observer.unobserve(change.target); // Разнаблюдаем после появления
        }
    });
}

let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);

let elements = document.querySelectorAll('.fade-in');
elements.forEach(elm => observer.observe(elm));

// Анимация появления при скролле
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
    els.forEach(elem => {
        if (isElementInViewport(elem)) {
            elem.classList.add('animated');
        }
    });
}

document.addEventListener('DOMContentLoaded', animateScrollingElements);
window.addEventListener('scroll', animateScrollingElements);

// Аккордеон с анимацией высоты
function accordeon() {
    const accordionElems = document.querySelectorAll(".accordeon");

    accordionElems.forEach((elem) => {
        elem.addEventListener('click', function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
}

accordeon();

// Обработка формы отправки через fetch
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const formData = {
        name,
        email,
        message
    };

    // Пример отправки на сервер (замени '/send-message' на свой реальный URL)
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (response.ok) {
                alert('Сообщение успешно отправлено!');
                this.reset();
            } else {
                alert('Ошибка при отправке. Пожалуйста, попробуйте позже.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Ошибка при отправке.');
        });
});

// Анимация круга при прокрутке
window.addEventListener('scroll', function() {
    const circle = document.querySelector('.circle');
    if (!circle) return;

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const percentage = scrollPosition / maxScroll;
    const circleTop = percentage * 100;

    circle.style.top = circleTop + 'vh';
});

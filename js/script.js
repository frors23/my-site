document.addEventListener('DOMContentLoaded', function () {
    // Применение маски телефона
    var phoneInput = document.getElementById('phone');
    if (phoneInput) {
        Inputmask("(999) 99-99-999").mask(phoneInput);
    }

    // Обработчик для плавной прокрутки
    var links = document.querySelectorAll("a[href^='#']");
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Отключаем стандартное поведение ссылки

            var targetId = this.getAttribute("href"); // Получаем значение href
            var targetElement = document.querySelector(targetId); // Находим элемент, на который ссылается якорь

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, // Позиция элемента по оси Y
                    behavior: "smooth" // Плавная прокрутка
                });
            }
        });
    });

    // Функция для показа/скрытия поля выбора мессенджера
    var checkbox = document.getElementById('no_call');
    var messengerSelectWrapper = document.getElementById('messenger_select_wrapper');

    if (checkbox) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                messengerSelectWrapper.style.display = 'block';
            } else {
                messengerSelectWrapper.style.display = 'none';
            }
        });
    }
});

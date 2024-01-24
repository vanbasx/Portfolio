const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    });

    // Получаем все ссылки внутри меню
    const menuLinks = menu.querySelectorAll('a');

    // Добавляем обработчик события клика для каждой ссылки
    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            // Закрываем меню
            burger.classList.remove('_active');
            menu.classList.remove('_active');
            body.classList.remove('_lock');
        });
    });
}


function setTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light')
    } else {
        setTheme('theme-dark')
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark')
        document.getElementById('slider').checked = false
    } else {
        setTheme('theme-light')
      document.getElementById('slider').checked = true
    }
})()


document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с классом "section"
    var sections = document.querySelectorAll('.section');
  
    // Добавляем обработчик клика для каждого элемента
    sections.forEach(function(section) {
      section.addEventListener('click', function() {
        // Используем метод scrollIntoView с параметром { behavior: 'smooth' }
        this.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
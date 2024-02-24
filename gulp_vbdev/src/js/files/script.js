// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


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

document.getElementById('slider').addEventListener('change', toggleTheme);
// Переключение темы
function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
};

// смена название принажатии кнопки 
const switchText = document.getElementById('switch-text');

function switchTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        switchText.textContent = 'Dark';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        switchText.textContent = 'Light';
    }
}





  



const toggleButton = document.getElementById('trocar_tema');
const body = document.body;

if (toggleButton) {  // verifica se o botão existe na página
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark_theme');

        // salvando o estado do tema no localStorage
        if (body.classList.contains('dark_theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// aplicar o tema salvo ao carregar a página
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark_theme');
    }
});
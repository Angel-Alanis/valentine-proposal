const heartsContainer = document.querySelector('.hearts-container');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const finalMessage = document.getElementById('final-message');

// Crear corazones por toda la pantalla (máximo 20)
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heartsContainer.appendChild(heart);

    // Posición aleatoria en X
    heart.style.left = `${Math.random() * 100}vw`;
    
    // Variación en el tiempo de animación
    heart.style.animationDuration = `${Math.random() * 3 + 4}s`;
    heart.style.animationDelay = `${Math.random() * 2}s`;

    // Eliminar el corazón después de la animación
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Crear corazones iniciales (máximo 20)
function startHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createHeart(), i * 300);
    }
    
    // Continuar creando corazones ocasionalmente
    setInterval(() => {
        if (heartsContainer.children.length < 20) {
            createHeart();
        }
    }, 1000);
}

// Mover el botón "No" a una posición aleatoria
function moveNoButton() {
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.position = 'fixed';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Evento del botón "No"
noButton.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

// También mover cuando el mouse esté cerca (para móviles, usar touchstart)
noButton.addEventListener('mouseenter', () => {
    moveNoButton();
});

noButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Evento del botón "Yes"
yesButton.addEventListener('click', () => {
    finalMessage.innerHTML = 'Te espero este sábado 14 de febrero 😘❤️';
    finalMessage.classList.remove('hidden');
    
    // Ocultar los botones
    document.querySelector('.buttons-container').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    
    // Crear más corazones al decir que sí
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createHeart(), i * 100);
    }
});

// Iniciar animación de corazones
window.onload = startHearts;
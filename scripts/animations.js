const heartsContainer = document.querySelector('.hearts-container');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const finalMessage = document.getElementById('final-message');

// Crear corazones por toda la pantalla (máximo 20)
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heartsContainer.appendChild(heart);

    // Posición aleatoria en X y Y
    const randomX = Math.random() * (window.innerWidth - 50);
    const randomY = Math.random() * window.innerHeight;
    
    heart.style.left = `${randomX}px`;
    heart.style.top = `${randomY}px`;
    
    // Variación en el tamaño
    const size = Math.random() * 20 + 20; // entre 20px y 40px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    
    // Ajustar los pseudo-elementos también
    heart.style.setProperty('--heart-size', `${size}px`);
    
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
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createHeart(), i * 500);
    }
    
    // Continuar creando corazones ocasionalmente
    setInterval(() => {
        if (heartsContainer.children.length < 15) {
            createHeart();
        }
    }, 2000);
}

// Mover el botón "No" a una posición aleatoria
function moveNoButton() {
    const container = document.querySelector('.container');
    const maxX = window.innerWidth - noButton.offsetWidth - 40;
    const maxY = window.innerHeight - noButton.offsetHeight - 40;
    
    const randomX = Math.floor(Math.random() * maxX) + 20;
    const randomY = Math.floor(Math.random() * maxY) + 20;
    
    noButton.style.position = 'fixed';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    noButton.style.zIndex = '50';
}

// Evento del botón "No" - solo click
noButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    moveNoButton();
});

// Para móviles
noButton.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    moveNoButton();
});

// Evento del botón "Yes"
yesButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    finalMessage.innerHTML = 'Te espero este sábado 14 de febrero 😘❤️';
    finalMessage.classList.remove('hidden');
    
    // Ocultar los botones y el título
    document.querySelector('.buttons-container').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    
    // Crear más corazones al decir que sí
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createHeart(), i * 100);
    }
});

// Para móviles en el botón Yes
yesButton.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    finalMessage.innerHTML = 'Te espero este sábado 14 de febrero 😘❤️';
    finalMessage.classList.remove('hidden');
    
    // Ocultar los botones y el título
    document.querySelector('.buttons-container').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    
    // Crear más corazones al decir que sí
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createHeart(), i * 100);
    }
});

// Iniciar animación de corazones
window.onload = startHearts;
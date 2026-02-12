const heartsContainer = document.createElement('div');
heartsContainer.className = 'hearts-container';
document.body.appendChild(heartsContainer);

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heartsContainer.appendChild(heart);

    const size = Math.random() * 20 + 10; // Random size between 10 and 30
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random duration between 3s and 5s

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

function displayMessage() {
    const message = document.createElement('div');
    message.className = 'romantic-message';
    message.innerText = "Will you be my Valentine?";
    document.body.appendChild(message);

    setTimeout(() => {
        message.classList.add('fade-out');
    }, 3000); // Show message for 3 seconds
}

function startAnimation() {
    setInterval(createHeart, 500); // Create a heart every 500ms
    displayMessage();
}

window.onload = startAnimation;
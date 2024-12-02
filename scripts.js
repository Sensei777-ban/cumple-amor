// Mostrar la fecha de hoy en el encabezado
const fechaElement = document.getElementById('fecha');
const fechaHoy = new Date().toLocaleDateString('es-ES');
fechaElement.textContent = fechaHoy;

// Mostrar sección de galería de fotos
const showGalleryButton = document.getElementById('showGallery');
const gallerySection = document.getElementById('gallerySection');
showGalleryButton.addEventListener('click', function() {
    gallerySection.style.display = 'block';
    videoSection.style.display = 'none';
    quotesSection.style.display = 'none';
});

// Mostrar sección de videos especiales
const showVideoButton = document.getElementById('showVideo');
const videoSection = document.getElementById('videoSection');
showVideoButton.addEventListener('click', function() {
    videoSection.style.display = 'block';
    gallerySection.style.display = 'none';
    quotesSection.style.display = 'none';
});

// Mostrar sección de frases
const showQuotesButton = document.getElementById('showQuotes');
const quotesSection = document.getElementById('quotesSection');
showQuotesButton.addEventListener('click', function() {
    quotesSection.style.display = 'block';
    gallerySection.style.display = 'none';
    videoSection.style.display = 'none';
});

// Lógica para ampliar imágenes de la galería
const galleryItems = document.querySelectorAll('.gallery-item');
const fullscreenBackground = document.createElement('div');
fullscreenBackground.classList.add('fullscreen-background');
document.body.appendChild(fullscreenBackground);

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.add('fullscreen');
        fullscreenBackground.style.display = 'block';  // Mostrar el fondo oscuro
    });
});

// Cerrar la imagen ampliada al hacer clic en el fondo oscuro
fullscreenBackground.addEventListener('click', function() {
    const fullscreenImage = document.querySelector('.gallery-item.fullscreen');
    if (fullscreenImage) {
        fullscreenImage.classList.remove('fullscreen');
        fullscreenBackground.style.display = 'none';  // Ocultar el fondo oscuro
    }
});

// Control de la música de fondo
const audio = new Audio("images/musi1.mp3");
audio.loop = true;  // Asegura que la música se repita

document.getElementById("playMusic").addEventListener("click", function() {
    if (audio.paused) {
        audio.play(); // Reproducir música
        this.textContent = "Detener Música de Fondo"; // Cambiar el texto del botón
    } else {
        audio.pause(); // Detener música
        this.textContent = "Música de Fondo"; // Volver al texto original
    }
});

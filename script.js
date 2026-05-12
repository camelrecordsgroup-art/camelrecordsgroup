// 1. FUNCION DE AUDIO CORREGIDA
function playSong(isrc) {
    const container = document.getElementById('player-container');
    const widget = document.getElementById('spotify-widget');
    
    if (isrc) {
        // Cargamos el ISRC dinámico que viene del clic
        widget.src = `http://googleusercontent.com/spotify.com/6{isrc}`;
        
        // Hacemos que el contenedor exista en el DOM
        container.style.display = "block";
        
        // Retraso mínimo para que la transición CSS de 'translateY' se vea fluida
        setTimeout(() => {
            container.classList.add('active');
        }, 10);
    }
}

function closePlayer() {
    const container = document.getElementById('player-container');
    container.classList.remove('active');
    
    // Esperamos a que baje la animación para ocultarlo y limpiar el audio
    setTimeout(() => {
        container.style.display = "none";
        document.getElementById('spotify-widget').src = "";
    }, 500);
}

// 2. CONTROLES DE CARRUSELES
const vCarousel = document.getElementById('video-carousel');
const nBtn = document.getElementById('nextBtn');
const pBtn = document.getElementById('prevBtn');

if (nBtn && pBtn) {
    nBtn.onclick = () => { vCarousel.scrollBy({ left: 300, behavior: 'smooth' }); };
    pBtn.onclick = () => { vCarousel.scrollBy({ left: -300, behavior: 'smooth' }); };
}

const rGrid = document.getElementById('releasesGrid');
const nRel = document.getElementById('nextRel');
const pRel = document.getElementById('prevRel');

if (nRel && pRel) {
    nRel.onclick = () => { rGrid.scrollBy({ left: 250, behavior: 'smooth' }); };
    pRel.onclick = () => { rGrid.scrollBy({ left: -250, behavior: 'smooth' }); };
}

// 3. CONTROL DE MENÚ ACTIVO
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if(this.getAttribute('href') === "#") e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

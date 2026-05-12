// 1. FUNCION DE AUDIO UNIFICADA
function playSong(isrc) {
    const container = document.getElementById('player-container');
    const widget = document.getElementById('spotify-widget');
    
    // Cambiamos el link al reproductor oficial de Spotify usando el ISRC
    widget.src = `http://googleusercontent.com/spotify.com/7{isrc}&theme=0`;
    
    // Activamos la animación de subida
    container.classList.add('active');
}

function closePlayer() {
    const container = document.getElementById('player-container');
    container.classList.remove('active');
    
    // Limpiamos el src para que la música deje de sonar al cerrar
    setTimeout(() => {
        document.getElementById('spotify-widget').src = "";
    }, 500);
}

// 2. CONTROL DE FLECHAS YOUTUBE
const vCarousel = document.getElementById('video-carousel');
const nBtn = document.getElementById('nextBtn');
const pBtn = document.getElementById('prevBtn');

if (nBtn && pBtn) {
    nBtn.onclick = () => { vCarousel.scrollBy({ left: 300, behavior: 'smooth' }); };
    pBtn.onclick = () => { vCarousel.scrollBy({ left: -300, behavior: 'smooth' }); };
}

// 3. CONTROL DE FLECHAS RELEASES
const rGrid = document.getElementById('releasesGrid');
const nRel = document.getElementById('nextRel');
const pRel = document.getElementById('prevRel');

if (nRel && pRel) {
    nRel.onclick = () => { rGrid.scrollBy({ left: 250, behavior: 'smooth' }); };
    pRel.onclick = () => { rGrid.scrollBy({ left: -250, behavior: 'smooth' }); };
}
// CONTROL DE MENÚ ACTIVO
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Evitamos que salte la página si no tiene link real aún
        if(this.getAttribute('href') === "#") {
            e.preventDefault();
        }

        // Quitamos la clase 'active' de todos los links
        navLinks.forEach(l => l.classList.remove('active'));

        // Se la ponemos al que acabamos de tocar
        this.classList.add('active');
    });
});

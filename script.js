// 1. FUNCION DE AUDIO UNIFICADA
function playSong(isrc) {
    const container = document.getElementById('player-container');
    const widget = document.getElementById('spotify-widget');
    
    if (widget && container) {
        // CORRECCIÓN: Se añade el símbolo '$' antes de {isrc} para que funcione la variable
        widget.src = `https://open.spotify.com/embed/track/${isrc}?utm_source=generator&autoplay=1`;
        
        // Mostramos el reproductor
        container.style.display = "block";
        
        // Scroll suave al reproductor
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        console.log("Reproduciendo ISRC: " + isrc);
    }
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

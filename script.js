document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('global-audio-player');
    const miniPlayer = document.getElementById('mini-player');
    const playerText = document.getElementById('player-text');
    const closeBtn = document.getElementById('close-player-btn');

    // --- 1. LÓGICA DE AUDIO ---
    const playButtons = document.querySelectorAll('.play-btn-overlay, .play-label-btn');
    
    playButtons.forEach(btn => {
        btn.onclick = function() {
            const audioSrc = this.getAttribute('data-audio');
            const trackName = this.closest('.release-item').querySelector('.track-title').innerText;

            if (audio.src === audioSrc && !audio.paused) {
                audio.pause();
                miniPlayer.classList.remove('active');
            } else {
                audio.src = audioSrc;
                audio.play().catch(e => console.log("Error de audio:", e));
                playerText.innerText = `Reproduciendo: ${trackName}`;
                miniPlayer.classList.add('active');
            }
        };
    });

    closeBtn.onclick = () => {
        audio.pause();
        miniPlayer.classList.remove('active');
    };

    // --- 2. FLECHAS DE VIDEOS (ARREGLADO) ---
    const videoCarousel = document.getElementById('video-carousel');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            const cardWidth = videoCarousel.querySelector('.video-card').offsetWidth + 12;
            videoCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const cardWidth = videoCarousel.querySelector('.video-card').offsetWidth + 12;
            videoCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
    }

    // --- 3. FLECHAS DE RELEASES (ARREGLADO) ---
    const releasesGrid = document.getElementById('releasesGrid');
    const nextRel = document.getElementById('nextRel');
    const prevRel = document.getElementById('prevRel');

    if (nextRel && prevRel) {
        nextRel.addEventListener('click', () => {
            releasesGrid.scrollBy({ left: 160, behavior: 'smooth' });
        });

        prevRel.addEventListener('click', () => {
            releasesGrid.scrollBy({ left: -160, behavior: 'smooth' });
        });
    }
});

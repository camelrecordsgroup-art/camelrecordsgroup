document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('global-audio-player');
    const miniPlayer = document.getElementById('mini-player');
    const playerText = document.getElementById('player-text');

    // 1. LÓGICA DE REPRODUCCIÓN (Botones Play)
    const playButtons = document.querySelectorAll('.play-btn-overlay, .play-label-btn');
    
    playButtons.forEach(btn => {
        btn.onclick = (e) => {
            const audioSrc = btn.getAttribute('data-audio');
            const trackName = btn.closest('.release-item').querySelector('.track-title').innerText;

            if (audio.src === audioSrc && !audio.paused) {
                audio.pause();
                miniPlayer.classList.remove('active');
            } else {
                audio.src = audioSrc;
                audio.play();
                playerText.innerText = `Sonando: ${trackName}`;
                miniPlayer.classList.add('active');
            }
        };
    });

    // 2. FUNCIÓN PARA DETENER
    window.stopAudio = () => {
        audio.pause();
        miniPlayer.classList.remove('active');
    };

    // 3. FLECHAS YOUTUBE
    const vCarousel = document.getElementById('video-carousel');
    document.getElementById('nextBtn').onclick = () => vCarousel.scrollBy({ left: 300, behavior: 'smooth' });
    document.getElementById('prevBtn').onclick = () => vCarousel.scrollBy({ left: -300, behavior: 'smooth' });

    // 4. FLECHAS RELEASES
    const rGrid = document.getElementById('releasesGrid');
    document.getElementById('nextRel').onclick = () => rGrid.scrollBy({ left: 200, behavior: 'smooth' });
    document.getElementById('prevRel').onclick = () => rGrid.scrollBy({ left: -200, behavior: 'smooth' });
});
});

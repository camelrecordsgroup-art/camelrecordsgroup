document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('global-audio-player');
    const miniPlayer = document.getElementById('mini-player');
    const playerText = document.getElementById('player-text');
    const closeBtn = document.getElementById('close-player-btn');

    // Reproducción de Audio
    const playButtons = document.querySelectorAll('.play-btn-overlay, .play-label-btn');
    playButtons.forEach(btn => {
        btn.onclick = function() {
            const audioSrc = this.getAttribute('data-audio');
            const trackName = this.closest('.release-item').querySelector('.track-title').innerText;

            if (audio.src === audioSrc && !audio.paused) {
                audio.pause();
                miniPlayer.classList.remove('active');
            } else {
                audio.pause();
                audio.src = audioSrc;
                audio.play().catch(e => console.log("Audio bloqueado"));
                playerText.innerText = trackName;
                miniPlayer.classList.add('active');
            }
        };
    });

    closeBtn.onclick = () => { audio.pause(); miniPlayer.classList.remove('active'); };

    // Navegación con Scroll Suave
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith("#")) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Flechas de carruseles
    const setupArrows = (prevId, nextId, gridId, scrollAmount) => {
        const prev = document.getElementById(prevId);
        const next = document.getElementById(nextId);
        const grid = document.getElementById(gridId);
        if (next && prev && grid) {
            next.onclick = () => grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            prev.onclick = () => grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    setupArrows('prevBtn', 'nextBtn', 'video-carousel', 320);
    setupArrows('prevRel', 'nextRel', 'releasesGrid', 160);
    setupArrows('prevPre', 'nextPre', 'preSaveGrid', 300);
});

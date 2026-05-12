document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('global-audio-player');
    const miniPlayer = document.getElementById('mini-player');
    const playerText = document.getElementById('player-text');
    const closeBtn = document.getElementById('close-player-btn');

    const playButtons = document.querySelectorAll('.play-btn-overlay, .play-label-btn');
    
    playButtons.forEach(btn => {
        btn.onclick = function() {
            const audioSrc = this.getAttribute('data-audio');
            const trackName = this.closest('.release-item').querySelector('.track-title').innerText;

            if (audio.src === audioSrc && !audio.paused) {
                audio.pause();
                miniPlayer.classList.remove('active');
            } else {
                audio.pause(); // Detenemos cualquier previo anterior
                audio.src = audioSrc;
                audio.play().catch(e => console.log("Audio bloqueado por navegador"));
                playerText.innerText = trackName;
                miniPlayer.classList.add('active');
            }
        };
    });

    closeBtn.onclick = () => {
        audio.pause();
        miniPlayer.classList.remove('active');
    };

    // Flechas
    document.getElementById('nextBtn').onclick = () => document.getElementById('video-carousel').scrollBy({ left: 300, behavior: 'smooth' });
    document.getElementById('prevBtn').onclick = () => document.getElementById('video-carousel').scrollBy({ left: -300, behavior: 'smooth' });
    document.getElementById('nextRel').onclick = () => document.getElementById('releasesGrid').scrollBy({ left: 160, behavior: 'smooth' });
    document.getElementById('prevRel').onclick = () => document.getElementById('releasesGrid').scrollBy({ left: -160, behavior: 'smooth' });
});

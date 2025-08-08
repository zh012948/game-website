document.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookies = document.getElementById('accept-cookies');
    const rejectCookies = document.getElementById('reject-cookies');
    const ageVerification = document.getElementById('age-verification');
    const verify18 = document.getElementById('verify-18');
    const under18 = document.getElementById('under-18');
    const playButton = document.querySelector('.play-button');
    const iframe = document.querySelector('.game-video iframe');

    // Show age verification modal on page load
    ageVerification.style.display = 'flex';

    verify18.addEventListener('click', () => {
        ageVerification.style.display = 'none';
    });

    under18.addEventListener('click', () => {
        ageVerification.style.display = 'none';
    });

    acceptCookies.addEventListener('click', () => {
        cookieConsent.style.display = 'none';
    });

    rejectCookies.addEventListener('click', () => {
        cookieConsent.style.display = 'none';
    });

    playButton.addEventListener('click', () => {
        const gameSrc = iframe.getAttribute('data-src');
        if (gameSrc) {
            iframe.src = gameSrc; // Set the src to start the game
            iframe.style.visibility = 'visible'; // Make iframe visible
            playButton.style.display = 'none'; // Hide the play button
            // Attempt to trigger play on iframe content
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc) {
                const playEvent = new Event('play');
                iframeDoc.dispatchEvent(playEvent);
            }
        }
    });
});
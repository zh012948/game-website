document.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookies = document.getElementById('accept-cookies');
    const rejectCookies = document.getElementById('reject-cookies');
    const ageVerification = document.getElementById('age-verification');
    const verify18 = document.getElementById('verify-18');
    const under18 = document.getElementById('under-18');

    // Show age verification modal on page load
    ageVerification.style.display = 'flex';

    verify18.addEventListener('click', () => {
        ageVerification.style.display = 'none';
        cookieConsent.style.display = 'flex';
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
});
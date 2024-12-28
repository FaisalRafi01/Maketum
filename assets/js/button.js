// Memeriksa apakah tombol transisi ada di halaman
const transitionButton = document.querySelector('.transition-button');
if (transitionButton) {
    transitionButton.addEventListener('click', (e) => {
        document.body.classList.add('keluar');
        e.preventDefault();

        // Setelah durasi transisi keluar, menunggu beberapa detik, baru mengarahkan ke URL baru
        setTimeout(() => {
            window.location.href = transitionButton.href;
        }, 800); // Durasi delay dan transisi keluar (800ms)
    });
} else {
    console.log('Transition button not found, skipping button-related actions.');
}


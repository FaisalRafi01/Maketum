document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.body;

  // Menambahkan kelas untuk efek transisi masuk
  mainContent.classList.add('page-transition-enter');
  setTimeout(() => {
    mainContent.classList.add('page-transition-enter-active');
  }, 0);

  // Menambahkan kelas setelah durasi transisi
  setTimeout(() => {
    mainContent.classList.add('page-transition-enter-done');
  }, 600); // Durasi transisi
});

document.querySelectorAll('.stack-image').forEach((image, index, allImages) => {
  image.style.zIndex = allImages.length - index; // Assign initial z-index

  image.addEventListener('click', () => {
    // Reset z-index and active class for all images
    allImages.forEach((img, i) => {
      img.classList.remove('mid');
      });

    // Set clicked image as active and bring it to the front
    image.classList.add('left');
  });
});

const items = document.querySelectorAll('.list-group-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    const name = item.getAttribute('data-name'); // Get the corresponding name (Baliho, Tara, etc.)
    
    // Hide all image sliders
    const allSliders = document.querySelectorAll('.slider');
    allSliders.forEach(slider => slider.style.display = 'none');

    // Show the corresponding images
    const selectedSlider = document.getElementById(name);
    if (selectedSlider) {
      selectedSlider.style.display = 'block';
    }
  });
});
const smallImages = document.querySelectorAll('.small-image');
const mainImage = document.querySelector('.main-image');



smallImages.forEach(image => {
  image.addEventListener('click', () => {
    const source = image.getAttribute('src');

    // Анімація зміни маленької картинки на головну картинку
    image.style.transform = 'scale(1.2)';
    image.style.border = '2px solid black';
    image.style.opacity = '0';

    // Анімація зміни головної картинки на маленьку картинку
    mainImage.style.transform = 'scale(0.8)';
    mainImage.style.border = '2px solid black';
    mainImage.style.opacity = '0';

    setTimeout(() => {
      // Зміна джерела картинки
      image.setAttribute('src', mainImage.getAttribute('src'));
      mainImage.setAttribute('src', source);

      // Анімація повернення до початкового стану
      image.style.transform = 'scale(1)';
      image.style.border = '1px solid black';
      image.style.opacity = '1';
      mainImage.style.transform = 'scale(1)';
      mainImage.style.border = '1px solid black';
      mainImage.style.opacity = '1';
    }, 300);
  });
});
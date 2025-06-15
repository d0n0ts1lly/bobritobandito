// Добавь сюда все свои картинки
const images = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg'];

const reels = document.querySelectorAll('.reel');
const result = document.getElementById('result');

function spin() {
  const results = [];

  reels.forEach((reel, i) => {
    const index = Math.floor(Math.random() * images.length);
    const selectedImage = images[index];
    results.push(selectedImage);

    // Защита от кэша браузера
    reel.src = selectedImage + '?v=' + Math.random();

    // Анимация
    reel.style.transform = 'scale(1.1)';
    setTimeout(() => reel.style.transform = 'scale(1)', 200);
  });

  // Проверка на выигрыш
  if (results[0] === results[1] && results[1] === results[2]) {
    result.textContent = 'Занос!';
    result.className = 'result-text win';
  } else {
    result.textContent = 'Попробуй снова!';
    result.className = 'result-text lose';
  }

  console.log('Выпавшие изображения:', results);
}

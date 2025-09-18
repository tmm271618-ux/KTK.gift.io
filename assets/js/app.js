window.onload = function () {
  const images = document.querySelectorAll('.Instraction-image');
  const displayTime = 3000;  // 表示されている時間
  const transitionTime = 1000; // アニメーション時間
  const totalTime = displayTime + transitionTime * 2;

  let currentIndex = 0;

  function showNextImage() {
    const currentImage = images[currentIndex];

    // フェードイン
    currentImage.classList.add('show');

    // 一定時間後にフェードアウト
    setTimeout(() => {
      currentImage.classList.remove('show');
      currentImage.classList.add('hide');
    }, displayTime);

    // 次の画像へ
    setTimeout(() => {
      currentImage.classList.remove('hide');
      currentIndex = (currentIndex + 1) % images.length;
      showNextImage(); // 再帰的に繰り返す
    }, totalTime);
  }

  showNextImage(); // 最初の画像を表示
};
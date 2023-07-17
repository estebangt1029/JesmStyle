document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.carousel');
    var images = carousel.getElementsByTagName('img');
    var currentImage = 0;
    var touchstartX = 0;
    var touchendX = 0;
  
    function showImage(n) {
      images[currentImage].style.display = 'none';
      currentImage = (n + images.length) % images.length;
      images[currentImage].style.display = 'block';
    }
  
    carousel.addEventListener('touchstart', function(event) {
      touchstartX = event.touches[0].clientX;
    });
  
    carousel.addEventListener('touchend', function(event) {
      touchendX = event.changedTouches[0].clientX;
      handleGesture();
    });
  
    function handleGesture() {
      if (touchendX < touchstartX) {
        // Deslizamiento hacia la izquierda, cambia a la siguiente imagen
        showImage(currentImage + 1);
      }
      if (touchendX > touchstartX) {
        // Deslizamiento hacia la derecha, cambia a la imagen anterior
        showImage(currentImage - 1);
      }
    }
  
    showImage(currentImage);
  });
  
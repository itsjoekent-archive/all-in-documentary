import '../css/main.scss';

(function () {
  const trailer = document.getElementById('trailer');

  document.getElementById('open-trailer').addEventListener('click', function() {
    trailer.classList.add('--open');
  });

  document.getElementById('close-trailer').addEventListener('click', function() {
    trailer.classList.remove('--open');
  });
})();

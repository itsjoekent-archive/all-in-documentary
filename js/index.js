import '../css/main.scss';

(function () {
  const trailer = document.getElementById('trailer');
  const openTrailer = document.getElementById('open-trailer');
  const closeTrailer = document.getElementById('close-trailer');

  if (openTrailer) {
    openTrailer.addEventListener('click', function() {
      trailer.classList.add('--open');
    });
  }

  if (closeTrailer) {
    closeTrailer.addEventListener('click', function() {
      trailer.classList.remove('--open');
    });
  }

  let isNavigationOpen = false;
  const navigation = document.getElementById('navigation');
  const toggleNavigation = document.getElementById('toggle-navigation');

  toggleNavigation.addEventListener('click', function() {
    isNavigationOpen = !isNavigationOpen;

    if (isNavigationOpen) {
      navigation.classList.add('--open');
      toggleNavigation.textContent = 'Close';
    } else {
      navigation.classList.remove('--open');
      toggleNavigation.textContent = 'Menu';
    }
  });
})();

window.onscroll = function () {
  if (window.screen.width >= 768) {
    scrollY <= 70
      ? document.getElementById('header').classList.remove('header-scroll')
      : document.getElementById('header').classList.add('header-scroll');
    scrollY <= 700
      ? document.getElementById('anchor-top').classList.add('anchor-hidden')
      : document.getElementById('anchor-top').classList.remove('anchor-hidden');
  } else {
    scrollY <= 120
      ? document.getElementById('header').classList.remove('header-scroll')
      : document.getElementById('header').classList.add('header-scroll');
    scrollY <= 700
      ? document.getElementById('anchor-top').classList.add('anchor-hidden')
      : document
          .getElementById('anchor-top')
          .classList.remove('anchor-hidden');
  }
};

$('.slider-container').slick({
  // // * Кнопки для лайф сервера
  // prevArrow:
  //   '<button type="button" class="my-slick my-slick-prev"> <svg width="12" height="12"><use href="./images/icons/sprite.svg#button-left"></use></svg></button>',
  // nextArrow:
  //   '<button type="button" class="my-slick my-slick-next"><svg width="12" height="12"><use href="./images/icons/sprite.svg#button-right"></use></svg></button>',

  // * Кнопки для живої сторінки
    prevArrow:
      '<button type="button" class="my-slick my-slick-prev"> <svg width="12" height="12"><use href="/test-project-vite/assets/sprite-5aa2e930.svg#button-left"></use></svg></button>',
    nextArrow:
      '<button type="button" class="my-slick my-slick-next"><svg width="12" height="12"><use href="/test-project-vite/assets/sprite-5aa2e930.svg#button-right"></use></svg></button>',

  
  infinite: true, //* безкінечний скрол
  speed: 300, //* швидкість анімації скролу
  slidesToScroll: 1, //* кількість карнинок при скролі
  //slidesToShow: 4,      //* кількість елементів
  autoplay: true, //* автоскрол
  autoplaySpeed: 2000, //* період автоскролу
  variableWidth: true, //* своя ширина

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        variableWidth: false,

        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        variableWidth: false,

        slidesToShow: 2,
      },
    },
  ],
});

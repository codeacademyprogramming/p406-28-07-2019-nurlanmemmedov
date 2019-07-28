$(document).ready(function() {
  //   $('#lessons ul li').each(function(index, element) {

  //   })

  //   const newDiv = $('<div>');
  //   const h3 = $('<h3>')
  //   newDiv.addClass('square beforeElement');
  //   h3.text('Before');
  //   newDiv.html(h3);

  //   $('.middleElement').before(newDiv);

  //   const afterDiv = newDiv.clone();
  //   afterDiv.find('h3').text('After');

  //   $('.middleElement').after(afterDiv);

  //   function getSquareItem() {
  //     return $('<div>').addClass('square');
  //   }

  //   const newDiv = $('<div>').addClass('square');
  //   newDiv.appendTo($('#lessons'));

  //   $('#lessons').append(newDiv);

  //   $('.square').detach();

  //   $('#test-form').submit(function(e) {
  //     e.preventDefault();
  //     const email = $(this).find('input[name="email"]').val('example@mail.com');
  //     const password = $(this).find('input[name="password"]').val();

  //     console.log({ email, password });
  //   })

  const carousel = $(".owl-carousel");
  carousel.owlCarousel({
    items: 3,
    nav: false,
    loop: true,
    margin: 50,
    center: true,
  });

  carousel.on('translated.owl.carousel', function(a) {
    $('.owl-item').removeClass('centerItem before after');
    $('.owl-item.active').each(function(index, element) {
      let elementClassName = '';

      switch (index) {
        case 0:
          elementClassName = 'before';
          break;
        case 1:
          elementClassName = 'centerItem';
          break;
        case 2:
          elementClassName = 'after';
          break;
        default:
      }

      $(element).addClass(elementClassName);
    })
  })

  $('.card').click(function() {
    $(this).toggleClass('active');
  })
});

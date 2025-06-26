
var hamburger = $('.hamburger-menu');
$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});
$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-active');
});

$('#smarttab').smartTab({
  enableUrlHash: false
});

$('#smarttab1').smartTab({
  autoAdjustHeight: false,
  enableUrlHash: false
});

$('.cover-slick').slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true
});

$('.js-fadein-left').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },
  offset: '50%',
});

$('.js-fadein-right').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },
  offset: '50%',
});

$('.point-img3').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },
  offset: '50%',
});

// $('.faq-top1').on('click', function (e) {
//   var content = $(this).next('.faq-top1-content');
//   var icon1 = $(this).find('i');
//   // content.slideToggle({
//   //   start: function () {
//   //     $(this).css('display', 'flex');
//   //   }
//   // });
//   content.toggleClass('faq-open');

//   icon1.toggleClass('bi-caret-down-fill bi-caret-up-fill');

//   // if (icon1.hasClass('bi-caret-down-fill')) {
//   //   icon1.removeClass('bi-caret-down-fill').addClass('bi-caret-up-fill');
//   // } else {
//   //   icon1.removeClass('bi-caret-up-fill').addClass('bi-caret-down-fill');
//   // }
// });

$('.faq-top1').on('click', function () {
  var content = $(this).next('.faq-top1-content');
  var icon1 = $(this).find('i');

  // content.stop().slideToggle();
  content.slideToggle();


  icon1.toggleClass('bi-caret-down-fill bi-caret-up-fill');
});

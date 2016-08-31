/* eslint-env jquery */

(function ($) {

    $(window).on('load resize', function(event) {

    var articleHeight = $('.main-content').height();
    var toTop;
    var perc;
    var windowHeight = $(window).height();

    $(window).on('scroll', function(){
      checkProg();
    });

    function checkProg(){
      toTop = ( $( window ).scrollTop() + windowHeight ) - $('.main-content').offset().top;
      perc = toTop/articleHeight;
      fillProgressBar(perc);
    }

    function fillProgressBar(p){
      p = (p*100)+"%";
      $('.global-header__progress-bar').width(p);
    };

    checkProg();
  })


  $('.js-reveal-header').on('click', function(event) {
    $('.single-post').toggleClass('single-post--reveal-cover')
    $('.post-title-block').fadeToggle()
    $('.global-header').fadeToggle()
  })

  $(".single-post").fitVids();

  $('.img-link').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    closeOnContentClick: true,
    gallery:{
      enabled:true
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }

  });

  $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        },
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it

          duration: 100, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function

          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
    });
  });

  if ($('body').hasClass('top-banner')) {
    $(".global-header").sticky({topSpacing:0});
  }
  $('.latest-news','.hero-aside__side ').scrollbar();

  $('.menu-trigger').on('click', function(event) {
    $('.global-header__nav').slideToggle();
  })

})( jQuery );

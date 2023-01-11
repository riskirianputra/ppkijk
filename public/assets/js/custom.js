

    // //active link
    //   $('.top-nav-link').on('click', function() {
    //     $('.active-link').removeClass('active-link');
    //     $(this).addClass('active-link');
    //   });



    //scroll navbar
      $(function () {
        if ($(window).width() > 992) {
          $(window).scroll(function(){
            if ($(this).scrollTop() > 40) {
                $('#navbar_toptwo').removeClass("my-transition-2");
                $('#navbar_toptwo').addClass("my-transition-0");
                $('#navbar_topone').addClass("fixed-top");
                // add padding top to show content behind navbar
                $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
              }else{
                $('#navbar_topone').removeClass("fixed-top");
                $('#navbar_toptwo').removeClass("my-transition-0");
                $('#navbar_toptwo').addClass("my-transition-2");
                // remove padding top from body
                $('body').css('padding-top', '0');
              }
          });
        } // end if
      });

    //owl carousel
      $(document).ready(function(){
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items:2,
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            // responsiveClass:true,
            center:true,
            responsive:{
                0:{
                    items:2,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:1,
                    loop:true
                }
            }
        });
      });

      // button to top
      $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 20) {
            $('#toTopBtn').fadeIn();
            } else {
            $('#toTopBtn').fadeOut();
          }
      });

      $('#toTopBtn').click(function() {
          $("html, body").animate({
          scrollTop: 0
          }, 1000);
          return false;
          });
      });

      // Scroll Reveal
      // ScrollReveal().reveal('.navbar',{
      //   duration: 2000,
      //   origin: 'bottom'
      // });
      ScrollReveal().reveal('.showcase-left',{
        duration:3000,
        origin:'left',
        distance:'10px'
      });
      ScrollReveal().reveal('.showcase-left-2',{
        duration:4000,
        origin:'left',
        distance:'10px'
      });
      ScrollReveal().reveal('.showcase-left-3',{
        duration:5000,
        origin:'left',
        distance:'10px'
      });
      ScrollReveal().reveal('.showcase-right',{
        duration:3000,
        origin:'right',
        distance:'10px'
      });
      ScrollReveal().reveal('.carousel',{
         opacity: 0 ,
         duration:3000,
      });
      ScrollReveal().reveal('.showcase-top',{
        duration:2000,
        origin:'top',
        distance:'5%'
      });
      ScrollReveal().reveal('.showcase-bot',{
        duration:2000,
        origin:'bottom',
        distance:'5%'
      });
      ScrollReveal().reveal('.showcase-fade',{
        duration:3000,
        scale: 0.85
      });



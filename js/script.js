$(document).ready(function(){

  //Slideshow
  $(function(){

    var pause = 10000;
    var interval;
    var slide = 1;

    $('.slide-button-1').click(function(){
      stopSlideshow();
      slide = 1;
      /*startSlideshow();*/
    });

    $('.slide-button-2').click(function(){
      stopSlideshow();
      slide = 2;
      /*startSlideshow();*/
    });

    $('.slide-button-3').click(function(){
      stopSlideshow();
      slide = 3;
      /*startSlideshow();*/
    });

    function executeSlides(){
      if (slide === 1){
        $('.slide1, .slide-button-1').css({'opacity':'1'});
        $('.slide2, .slide3').css({'opacity':'0'});
        $('.slide-button-2, .slide-button-3').css({'opacity':'0.5'});
      } else if (slide === 2){
        $('.slide2, .slide-button-2').css({'opacity':'1'});
        $('.slide1, .slide3').css({'opacity':'0'});
        $('.slide-button-1, .slide-button-3').css({'opacity':'0.5'});
      } else if (slide === 3){
        $('.slide3, .slide-button-3').css({'opacity':'1'});
        $('.slide2, .slide1').css({'opacity':'0'});
        $('.slide-button-2, .slide-button-1').css({'opacity':'0.5'});
      };
    };

    $(window).on('load click scroll', function(){
      executeSlides();
    });

    function startSlideshow(){
      interval = setInterval(function(){
        slide++;
        if (slide === 4){
          slide = 1;
        };
        executeSlides();
      }, pause);
    };

    function stopSlideshow(){
      clearInterval(interval);
    };

    startSlideshow();

    $('.slideshow').mouseenter(function(){
      stopSlideshow();
    });
    $('.slideshow').mouseleave(function(){
      startSlideshow();
    })

  });

  $('.gallery img').click(function(){
    $(this).toggleClass('fullsize');
    $('.gallery img').toggle();
  });

  $(window).on('load click scroll resize', function(){

    var imgWidth = $('.gallery img').width();
    var imgHeight = ((3/4)*imgWidth);
    $('.gallery img').css({'height':''+imgHeight+'px'});

  });

  var i = 0;
  setInterval(function(){
    $('.quote:eq('+i+')').css('opacity', '0');
    if (i == 5){
      i = 0
    } else {
      i++
    };
    $('.quote:eq('+i+')').css('opacity', '1');
  }, 10000);

  /*$(window).on('load click keyup scroll', function(){
    if (
      ($('#firstname').val().length) > 0 &&
      ($('#lastname').val().length) > 0 &&
      ($('#e-mail').val().length) > 0 &&
      ($('#phonenum').val().length) > 0 &&
      ($('#address1').val().length) > 0 &&
      ($('#town').val().length) > 0 &&
      ($('#county').val().length) > 0 &&
      ($('#postcode').val().length) > 0 &&
      ($('#message').val().length) > 0
    ){
      $('#send').attr('disabled', false);
      $('#send').css({'cursor':'pointer'})
    } else {
      $('#send').attr('disabled', true);
    };
  });*/

});

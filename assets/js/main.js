$(function() {

  $('.burger').on('click', function(){
    $('.menu_open').css('left', '0');
    $('header').find('.close').on('click', function(){
      $('.menu_open').css('left', '100%');
    });
  });
  $('.val_progr').text($(".input_progr").val());
        $(".input_progr").knob({
      'min':0,
      'max':100,
      'readOnly': true,
      'width': 100, //размеры по ширине
      'height': 100, //размеры по высоте
      "fgColor" : "#21fd15", //цвет полоски 
      displayInput: false, //выключить input
      'change' : function  ( v )  { 
        $('.val_progr').text($(".input_progr").val());
      }
    });
    $('.val_progr2').text($(".input_progr2").val());
        $(".input_progr2").knob({
      'min':0,
      'max':100,
      'readOnly': true,
      'width': 100, //размеры по ширине
      'height': 100, //размеры по высоте
      "fgColor" : "#21fd15", //цвет полоски 
      displayInput: false, //выключить input
      'change' : function  ( v )  { 
        $('.val_progr2').text($(".input_progr2").val());
      }
    });
    $('.val_progr3').text($(".input_progr3").val());
        $(".input_progr3").knob({
      'min':0,
      'max':100,
      'readOnly': true,
      'width': 100, //размеры по ширине
      'height': 100, //размеры по высоте
      "fgColor" : "#21fd15", //цвет полоски 
      displayInput: false, //выключить input
      'change' : function  ( v )  { 
        $('.val_progr3').text($(".input_progr3").val());
      }
    });
  
    let clickOnButton = true;
    $(window).on('scroll', function(){
    if ($(this).scrollTop() > $('#about').offset().top-500 && clickOnButton){
    $('.block_progr').css('opacity', '1');
    $('#info-block2').find('.text').css('opacity', '1');
    $('#info-block2').find('.title').css('opacity', '1');
        
    //Анимация после загрузки страницы
    $(".input_progr").knob();
    $({animatedVal: 0}).animate({animatedVal: $(".input_progr").val()}, {
      duration: 2000,
      easing: "swing",
    step: function() {
      $(".input_progr").val(Math.ceil(this.animatedVal)).trigger("change");
    }
    });
    $(".input_progr2").knob();
    $({animatedVal: 0}).animate({animatedVal: $(".input_progr2").val()}, {
      duration: 2000,
      easing: "swing",
    step: function() {
      $(".input_progr2").val(Math.ceil(this.animatedVal)).trigger("change");
    }
    });
    $(".input_progr3").knob();
    $({animatedVal: 0}).animate({animatedVal: $(".input_progr3").val()}, {
      duration: 2000,
      easing: "swing",
    step: function() {
      $(".input_progr3").val(Math.ceil(this.animatedVal)).trigger("change");
    }
    });
    clickOnButton = false;
    }
  })

  });
$(function()
{
  $('#about').css('opacity', '1');
  $(window).on('scroll', function(){
    if ($(this).scrollTop() > $('.info-block2').offset().top-600 ){
      $('.info-block').css('opacity', '1');
    }
    if ($(this).scrollTop() > $('.info-block').offset().top-300)
    {
      $('.info-block3').css('opacity', '1');
    }
    if ($(this).scrollTop() > $('.info-block3').offset().top-300)
    {
      $('#advantage').css('opacity', '1');
    }
    if ($(this).scrollTop() > $('#advantage').offset().top-400)
    {
      $('#images').css('opacity', '1');
      $('footer').css('opacity', '1');
    }
});
})
  


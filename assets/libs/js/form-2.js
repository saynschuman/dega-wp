$(document).ready(function(){ 
  
  // Проверка на правильность е-майла
  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
  }
  
  subscribe = 'no';
  
  //Отправка на почту
  function SEND_mail(s_name, s_phone, s_email, s_comment, s_subject, s_text, s_product, s_url_send, s_view_name, s_view_phone, s_view_mail, s_view_comment, s_view_product, point1='', point2='', weight = '', volume = ''){
    
    // Имя
    if (s_name == 'no_name'){
       var name = s_name;
       var real_name = false;   
    } else{
       var name = $(s_name).val();
       var real_name = true;        
    } 
    
    // Телефон
    if (s_phone == 'no_phone'){
       var phone = s_phone;
       var real_phone = false;    
    } else{
       var phone = $(s_phone).val();
       var real_phone = true;       
    }
    
    // Почта
    if(s_email.indexOf('@') + 1) {
       var email = s_email;
       var real_mail = false;
    }else{
       var email = $(s_email).val();
       var real_mail = true;
    }
    
    // Комментарий
    if (s_comment == 'no_comment'){
       var comment = s_comment;
       var real_comment = false;    
    } else{
       var comment = $(s_comment).val();
       var real_comment = true;       
    }
    
    // Продукт
    if (s_product == 'no_product' || $(s_product).length==0){
       var product = s_product;
       var real_product = false;    
    } else{
       var product = $(s_product).val();
       var real_product = true;       
    }
    
    var subject = s_subject;
    var text = s_text;
    
    var view_name = s_view_name;
    var view_phone = s_view_phone;
    var view_mail = s_view_mail;
    var view_comment = s_view_comment;
    var view_product = s_view_product;
    
    if(phone == ''){
      $(s_phone).closest('.bi').addClass('error');
    } else if(name == ''){
      $(s_name).closest('.bi').addClass('error');
    } else if(email == ''){
      $(s_email).closest('.bi').addClass('error');
    } else if (isValidEmailAddress(email))
    { 
      $.ajax({
       type: "POST",
       url: s_url_send,
       cache: false,
       data: "name="+name+"&phone="+phone+"&email="+email+"&comment="+comment+"&subject="+subject+"&text="+text+"&id_24="+product+"&view_name="+view_name+"&view_phone="+view_phone+"&view_mail="+view_mail+"&view_comment="+view_comment+"&view_product="+view_product+"&point1="+point1+"&point2="+point2+"&weight="+weight+"&volume="+volume,
       success: function(answ){
        if (real_name == true) $(s_name).val('');
        if (real_phone == true) $(s_phone).val('');
        if (real_mail == true) $(s_email).val('');
        if (real_comment == true) $(s_comment).val('');

        $( ".fancybox-close" ).trigger( "click" );
        setTimeout( function() { $( ".sankyou" ).trigger( "click" ); } , 501);    
        setTimeout( function() { $( ".fancybox-close" ).trigger( "click" ); } , 4000);
        
       }
      });
    }
    else
    {
      $(s_email).closest('.bi').addClass('error');
    }   
  }

  $('.send_zr').click(function(e){
    e.preventDefault();
    SEND_mail(
      'no_name',          // id поля имя или no_name
      '#phone_zr',        // id поля телефон или no_phone
      'info@ve-zy.ru',      // id поля телефон или ZAKAZ@nomail.ru (можно любой другой)
      'no_comment',         // id поля комментария или no_comment
      'Заявка на расчет',     // Заголовок письма
      'Заявка на расчет с сайта Грузоперевозки по России (из поп-апа)',   // Заголовок в теле письма
      '#zr input[name="id_24"]',        // id поля продукта или no_product
      'send_mail.php',      // php-файл для отправки на почту
      'no_name',          // выводим в письме имя (yes_name/no_name)
      'yes_phone',        // выводим в письме телефон (yes_phone/no_phone)
      'no_mail',          // выводим в письме почту (yes_mail/no_mail)
      'no_comment',         // выводим в письме комментарий (yes_comment/no_comment)
      'no_product'        // выводим в письме продукт (yes_product/no_product)
    );
  });

  $('.send_1').click(function(e){
    e.preventDefault();
    SEND_mail(
      'no_name',          // id поля имя или no_name
      '#phone_1',         // id поля телефон или no_phone
      'info@ve-zy.ru',      // id поля телефон или ZAKAZ@nomail.ru (можно любой другой)
      'no_comment',         // id поля комментария или no_comment
      'Заявка на расчет',     // Заголовок письма
      'Заявка на расчет стоимости и получение гарантированной скидки до 50% с сайта Грузоперевозки по России (первая форма)',   // Заголовок в теле письма
      '.form_send_1 input[name="id_24"]',         // id поля продукта или no_product
      'send_mail.php',      // php-файл для отправки на почту
      'no_name',          // выводим в письме имя (yes_name/no_name)
      'yes_phone',        // выводим в письме телефон (yes_phone/no_phone)
      'no_mail',          // выводим в письме почту (yes_mail/no_mail)
      'no_comment',         // выводим в письме комментарий (yes_comment/no_comment)
      'no_product'        // выводим в письме продукт (yes_product/no_product)
    );
  });

  $('.send_2').click(function(e){
    e.preventDefault();
    SEND_mail(
      'no_name',          // id поля имя или no_name
      '#phone_2',         // id поля телефон или no_phone
      'info@ve-zy.ru',      // id поля телефон или ZAKAZ@nomail.ru (можно любой другой)
      'no_comment',         // id поля комментария или no_comment
      'Заявка на расчет',     // Заголовок письма
      'Заявка на расчет стоимости и получение скидки 50% с сайта Грузоперевозки по России (вторая форма)',  // Заголовок в теле письма
      '.form_send_2 input[name="id_24"]',         // id поля продукта или no_product
      'send_mail.php',      // php-файл для отправки на почту
      'no_name',          // выводим в письме имя (yes_name/no_name)
      'yes_phone',        // выводим в письме телефон (yes_phone/no_phone)
      'no_mail',          // выводим в письме почту (yes_mail/no_mail)
      'no_comment',         // выводим в письме комментарий (yes_comment/no_comment)
      'no_product'        // выводим в письме продукт (yes_product/no_product)
    );
  });

  $('.send_3').click(function(e){
    e.preventDefault();
    SEND_mail(
      'no_name',          // id поля имя или no_name
      '#phone_3',         // id поля телефон или no_phone
      'info@ve-zy.ru',      // id поля телефон или ZAKAZ@nomail.ru (можно любой другой)
      'no_comment',         // id поля комментария или no_comment
      'Помощь в выборе транспорта',     // Заголовок письма
      'Помощь в выборе транспорта с сайта Грузоперевозки по России (из раздела ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ)',   // Заголовок в теле письма
      '.form_send_3 input[name="id_24"]',         // id поля продукта или no_product
      'send_mail.php',      // php-файл для отправки на почту
      'no_name',          // выводим в письме имя (yes_name/no_name)
      'yes_phone',        // выводим в письме телефон (yes_phone/no_phone)
      'no_mail',          // выводим в письме почту (yes_mail/no_mail)
      'no_comment',         // выводим в письме комментарий (yes_comment/no_comment)
      'no_product'        // выводим в письме продукт (yes_product/no_product)
    );
  });

  $('.send_4').click(function(e){
    e.preventDefault();
    SEND_mail(
      '#name_4',          // id поля имя или no_name
      '#phone_4',         // id поля телефон или no_phone
      'info@ve-zy.ru',      // id поля телефон или ZAKAZ@nomail.ru (можно любой другой)
      'no_comment',         // id поля комментария или no_comment
      'ФОРС-МАЖОР С ПЕРЕВОЗКОЙ',    // Заголовок письма
      'ФОРС-МАЖОР С ПЕРЕВОЗКОЙ с сайта Грузоперевозки по России (из блока У ВАС ФОРС-МАЖОР С ПЕРЕВОЗКОЙ, МЫ ВАМ ПОМОЖЕМ!)',   // Заголовок в теле письма
      '.form3 input[name="id_24"]',         // id поля продукта или no_product
      'send_mail.php',      // php-файл для отправки на почту
      'yes_name',         // выводим в письме имя (yes_name/no_name)
      'yes_phone',        // выводим в письме телефон (yes_phone/no_phone)
      'no_mail',          // выводим в письме почту (yes_mail/no_mail)
      'no_comment',         // выводим в письме комментарий (yes_comment/no_comment)
      'no_product'        // выводим в письме продукт (yes_product/no_product)
    );
  });

  $('.send_5').click(function(e){
    e.preventDefault();
    SEND_mail(
      'no_name',          // id поля имя или no_name
      '#phone_5',         // id поля телефон или no_phone
      'info@ve-zy.ru',      // id поля телефон или ZAKAZ@nomail.ru (можно любой другой)
      'no_comment',         // id поля комментария или no_comment
      'Заявка на расчет',     // Заголовок письма
      'Заявка на расчет стоимости и узнать есть ли скидка на ваш маршрут с сайта Грузоперевозки по России',
      '.form_send_5 input[name="id_24"]',         // id поля продукта или no_product
      'send_mail.php',      // php-файл для отправки на почту
      'no_name',        // выводим в письме имя (yes_name/no_name)
      'yes_phone',        // выводим в письме телефон (yes_phone/no_phone)
      'no_mail',          // выводим в письме почту (yes_mail/no_mail)
      'no_comment',         // выводим в письме комментарий (yes_comment/no_comment)
      'no_product'        // выводим в письме продукт (yes_product/no_product)
    );
  });
    
  $('.ms_close').click(function(e){
    e.preventDefault();
    $(this).closest('.ms').fadeOut(200);    
  });
    
  $('.form_c4 .ms_close').click(function(e){
    e.preventDefault();
    $('.cbdt_f a').trigger('click');
    $('#adress1_с1').val('');
    $('#adress2_с1').val('');
    $('#ves_с2').val('');
    $('#obj_с2').val('');
    $('.cbd_desc').text('Вы не указали ни одного параметра');
    $('#cbd_desc').val('Вы не указали ни одного параметра');
  });
  
  $('.cbdt a').click(function(e){
    e.preventDefault();
    $('.cbd_title a').parent().removeClass('active');
    $(this).parent().addClass('active');
    var id = $(this).data('id');
    $('.cd').hide();
    $('.cd_'+id).show();
    raschet();
  });
  
  $('.to_cbdt_2').click(function(e){
    e.preventDefault();
    $('.cbdt_2 a').trigger('click');
  });
  
  $('.to_cbdt_3').click(function(e){
    e.preventDefault();
    $('.cbdt_3 a').trigger('click');
  });
  
  $('.to_cbdt_4').click(function(e){
    e.preventDefault();
    if($('.cbd_desc').text()!='Вы не указали ни одного параметра'){   
        
      if ($('#name_с3').val() == ''){
        $('#name_с3').closest('.bi').addClass('error');
      } else if ($('#phone_с3').val() == ''){
        $('#phone_с3').closest('.bi').addClass('error');
      } else {
        $('.cbd_title a').parent().removeClass('active');
        $('.cbdt_4').addClass('active');
        $('.cd').hide();
        $('.cd_4').show();          
        SEND_mail(
          '#name_с3',         // id поля имя или no_name
          '#phone_с3',        // id поля телефон или no_phone
          'info@ve-zy.ru',      // id поля телефон или ZAKAZ@nomail.ru (можно любой другой)
          '#cbd_desc',        // id поля комментария или no_comment
          'Рассчет стоимости в 3 шага',     // Заголовок письма
          'Рассчет стоимости в 3 шага с сайта Грузоперевозки по России',
          '.form_c3 input[name="id_24"]',         // id поля продукта или no_product
          'send_mail.php',      // php-файл для отправки на почту
          'yes_name',         // выводим в письме имя (yes_name/no_name)
          'yes_phone',        // выводим в письме телефон (yes_phone/no_phone)
          'no_mail',          // выводим в письме почту (yes_mail/no_mail)
          'yes_comment',        // выводим в письме комментарий (yes_comment/no_comment)
          'no_product',         // выводим в письме продукт (yes_product/no_product)
          $('#adress1_с1').val(),
          $('#adress2_с1').val(),
          $('#ves_с2').val(),
          $('#obj_с2').val()
        );
        
      }       
      
    } else {
      alert('Вы не указали ни одного параметра');
    }
  });
  function raschet(){
    var adress1_с1 = $('#adress1_с1').val();
    var adress2_с1 = $('#adress2_с1').val();
    var ves_с2 = $('#ves_с2').val()+' кг.';
    var obj_с2 = $('#obj_с2').val()+' м<sup>3</sup>';
    var name_с3 = $('#name_с3').val();
    var phone_с3 = $('#phone_с3').val();
    
    var p = '';
    var p1 = '';
    var p2 = '';
    var p3 = '';
    var p4 = '';
    
    if(adress1_с1=='' && adress2_с1=='' && ves_с2== '' && ves_с2==' кг.' && obj_с2== '' && obj_с2==' м<sup>3</sup>' && name_с3=='' && phone_с3==''){
      $('.cbd_desc').html('Вы не указали ни одного параметра');
      $('#cbd_desc').val('Вы не указали ни одного параметра');
    } else {
      if(adress1_с1!='') p1 = '<li>Откуда: <b>'+adress1_с1+'</b></li>';
      if(adress2_с1!='') p2 = '<li>Куда: <b>'+adress2_с1+'</b></li>';
      if(ves_с2!='' && ves_с2!=' кг.') p3 = '<li>Вес: <b>'+ves_с2+'</b></li>';
      if(obj_с2!='' && obj_с2!=' м<sup>3</sup>') p4 = '<li>Объем: <b>'+obj_с2+'</b></li>';
      
      if(p1=='' && p2=='' && p3=='' && p4==''){
        p='Вы не указали ни одного параметра';
      }
      
      $('.cbd_desc').html('<ul>'+p+p1+p2+p3+p4+'</ul>');
      $('#cbd_desc').val('<ul>'+p+p1+p2+p3+p4+'</ul>');
    }
  }

  $('nav li a').click(function(){
    var el = $(this).attr('href');
    $('body').animate({
      scrollTop: $(el).offset().top-20}, 
    750);
    return false;
  });
  
  $('.n_nav li a').click(function(){
    var el = $(this).attr('href');
    $('body').animate({
      scrollTop: $(el).offset().top-45}, 
    750);
    return false;
  });

  $('.inp').focus(function(){
    $(this).closest('.bi').removeClass('error');
  });
  $('.inp').click(function(){
    $(this).closest('.bi').removeClass('error');
  });
  $('.vvt').mouseover(function(){
    
  });
  $('.vvf').mouseover(function(){
    $(this).closest('.wrap').find('.ms').fadeIn(250);
  });
  
  $( ".vvt" ).mouseenter(function() {
    $(this).closest('.wrap').find('.offer-pl').fadeIn(250);
  }).mouseleave(function() {
    $(this).closest('.wrap').find('.offer-pl').fadeOut(100);
  });
  
  $('.show_other').click(function(){
    $(this).closest('.row_hide').find('.row.disable').eq(0).removeClass('disable');
    $(this).closest('.row').find('.hide_other').show(); 
    if($(this).closest('.row_hide').find('.row.disable').length==0){
      $(this).hide();   
    }
  });
  
  $('.hide_other').click(function(){
    if ($(this).closest('.row_hide').find('.row').eq(1).hasClass('disable')==false){
      $(this).closest('.row_hide').find('.row').eq(1).addClass('disable');
      $(this).closest('.row_hide').find('.row').eq(1).find('input[type="text"]').val('');
    } else if($(this).closest('.row_hide').find('.row').eq(0).hasClass('disable')==false){
      $(this).closest('.row_hide').find('.row').eq(0).addClass('disable');
      $(this).closest('.row_hide').find('.row').eq(0).find('input[type="text"]').val('');
    }
    $(this).closest('.row').find('.show_other').show(); 
    if($(this).closest('.row_hide').find('.row.disable').length==2){
      $(this).hide();   
    }
  });
  
  $('.zakaz-online').click(function(){
    var p1 = $('#p1').val();
    var p2 = $('#p2').val();
    var p3 = $('#p3').val();
    var p4 = $('#p4').val();
    var p5 = $('#p5').val();
    var p6 = $('#p6').val();
    var p7 = $('#p7').val();
    var p8 = $('#p8').val();
    var p9 = $('#p9').val();
    var p10 = $('#p10').val();
    var p11 = $('#p11').val();
    var p12 = $('#p12').val();
    var p13 = $('#p13').val();
    var p14 = $('#p14').val();
    var p15 = $('#p15').val();
    var p16 = $('#p16').val();
    var p17 = $('#p17').val();
    var p18 = $('#p18').val();
    var p19 = $('#p19').val();
    var p20 = $('#p20').val();
    var p21 = $('#p21').val();
    var p22 = $('#p22').val();
    var p23 = $('#p23').val();
    
    if (p1 == ''){
      $('#p1').closest('.bi').addClass('error');
      $('body').animate({scrollTop: $('#p1').offset().top-85}, 750);
    } else if (p2 == ''){
      $('#p2').closest('.bi').addClass('error');
      $('body').animate({scrollTop: $('#p2').offset().top-85}, 750);
    } else if (p3 == ''){
      $('#p3').closest('.bi').addClass('error');
      $('body').animate({scrollTop: $('#p3').offset().top-85}, 750);
    } else if (p4 == ''){
      $('#p4').closest('.bi').addClass('error');
      $('body').animate({scrollTop: $('#p4').offset().top-85}, 750);
    } else if (p9 == ''){
      $('#p9').closest('.bi').addClass('error');
      $('body').animate({scrollTop: $('#p9').offset().top-85}, 750);
    } else if (p10 == ''){
      $('#p10').closest('.bi').addClass('error');
      $('body').animate({scrollTop: $('#p10').offset().top-85}, 750);
    } else if (p11 == ''){
      $('#p11').closest('.bi').addClass('error');
      $('body').animate({scrollTop: $('#p11').offset().top-85}, 750);
    } else if (p12 == ''){
      $('#p12').closest('.bi').addClass('error');
      $('body').animate({scrollTop: $('#p12').offset().top-85}, 750);
    } else if (p17 == ''){
      $('#p17').closest('.bi').addClass('error');
      $('body').animate({scrollTop: $('#p17').offset().top-85}, 750);
    } else if (p22 == ''){
      $('#p22').closest('.bi').addClass('error');
      $('body').animate({scrollTop: $('#p22').offset().top-85}, 750);
    } else if (p23 == ''){
      $('#p23').closest('.bi').addClass('error');
      $('body').animate({scrollTop: $('#p23').offset().top-85}, 750);
    } else {
      if(isValidEmailAddress($('#p23').val())){
        $(this).closest('form').submit();
      } else {
        $('#p23').closest('.bi').addClass('error');
        $('body').animate({scrollTop: $('#p23').offset().top-85}, 750);       
      }
    }
    
  });
  
  
  $('.n_btn').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.n_nav').slideToggle(250);
  });
  
  $('.n_nav li a').click(function(e){
    e.preventDefault();
    setTimeout( function() { 
      $('.n_btn').removeClass('active');
      $('.n_nav').slideUp(150);
    } , 5);
  });
  
  
  $("body").click(function (event) {    
    if ($(event.target).closest(".n_nav, .n_btn").length === 0) {
      if ($(window).width()<=1039){
        $('.n_btn').removeClass('active');
        $('.n_nav').slideUp(150);
      }
    }   
  }); 
  $(window).scroll(function () {
    if ($(window).width()<=1039){
      $('.n_btn').removeClass('active');
      $('.n_nav').slideUp(150);
    }
  });
  
});
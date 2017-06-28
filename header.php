<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <!-- header -->
    <header class="header">
        <div class="container hat-foot-block">
            <div class="inner">
                <div class="row header-inner">
                    <div class="col-md-4 col-sm-16 left">
                        <div class="logo"><a href=""><img src="<?php echo get_template_directory_uri() ?>/assets/img/logo.jpg" alt=""></a></div>
                    </div>
                    <div class="col-md-8 col-sm-16 center">
                        <div class="row">
                            <div class="col-md-11">График работы: пн-пт: с 8.30 до 20.00 <br> сб: с 9.00 до 18.00  вс: выходной</div>
                            <div class="col-md-5">
                                <ul class="social">
                                    <li><a href=""><i class="fa fa-vk" aria-hidden="true"></i></a></li>
                                    <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                </ul>
                                <div class="mail"><a href="mailto:med@clinica-dega.ru">med@clinica-dega.ru</a></div>
                            </div>
                            <div class="col-md-16"><span class="consult-title">Консультация врачей высших квалификационных категорий</span></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-16 right">
                        <a href="" class="tel">(8422) 97-46- 47</a>
                         <div class="addres"><i class="fa fa-map-marker" aria-hidden="true"></i> <span>г. Ульяновск, ул. Федерации, 52</span></div>
                         <a href="" class="appointment">Записаться на прием</a> 
                    </div>
                </div>
                <div class="t">Меню</div>
                <a class="mobile-button" href=""><span></span></a>
                <nav class="col-md-16">
                    <ul class="full-menu">                                                                                                     
                        <li><a href="">О нас</a></li>
                        <li><a href="">Специалисты</a></li>
                        <li class="dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Косметология</a>
                            <ul class="dropdown-menu">
                                <li class="col-md-8 col-xs-8">
                                    <span class="dropdown-header">Физиопроцедуры</span>
                                    <a href="#">RF-лифтинг лицо и тело</a>
                                    <a href="">Газожидкостный пилинг</a>
                                    <a href="">Игольчатый липолиз</a>
                                    <a href="">Лазеротерапия</a>
                                    <a href="">Лазеная шлифовка</a>
                                    <a href="">Лазерная эпиляция</a>
                                    <a href="">Миостимуляция</a>
                                    <a href="">Озонотерапия</a>
                                    <a href="">Фонофорез</a>
                                    <a href="">Фотосистема</a>
                                    <a href="">Электропорация</a>
                                    <a href="">Биоревитализация</a>
                                    <a href="">Нитевой лифтинг</a>
                                    <a href="">Контурная пластика</a>
                                </li>
                                <li class="col-md-8 col-xs-8">
                                    <span class="dropdown-header">Мезотерапия</span>
                                    <a href="#">Мезотерапия волос</a>
                                    <a href="#">Мезотерапия лица</a>
                                    <a href="#">Мезотерапия тела</a>
                                    <span class="divider"></span>
                                    <span class="dropdown-header">Уходы</span>
                                    <a href="">Массаж по лицу</a>
                                    <a href="">Уход Альпика</a>
                                    <a href="">Уход Мария Галанд</a>
                                    <a href="">Уход Натур Биссе</a>
                                    <a href="">Уход Ультрасьютикалс</a>
                                    <span class="divider"></span>
                                    <span class="dropdown-header">Депиляция</span>
                                    <a href="">Депиляция воск</a>
                                    <a href="">Депиляция сахар</a>
                                </li>                                
                            </ul>
                        </li>
                        <li><a href="">Медицина</a></li>
                        <li><a href="">Диагностика</a></li>
                        <li><a href="">Цены</a></li>
                        <li><a href="">Акции</a></li>
                        <li><a href="">Отзывы</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </nav>
                
            </div>
        </div>
    </header>		
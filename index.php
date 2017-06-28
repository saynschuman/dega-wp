<?php
/**
 * The main template file
 */

get_header(); ?>
	<main class="homepage container">
		<div class="slider">
			<div class="item" style="background-image: url(<?php echo get_template_directory_uri() ?>/assets/img/baner.jpg)">
				<div class="pull-right slider-text">
					<div class="text-inner right">
						<div class="header-text">
							<span class="upper-red">ВЕСЬ МАРТ!</span> <span class="upper-blue">Лазерная шлифовка!</span><br> 
							<span class="lower-blue">Лицо –</span> <span class="lower-red">6 000 руб.,</span> <span class="lower-blue">руки -</span> <span class="lower-red">4 000 руб.,</span> <span class="lower-blue">декольте – </span><span class="lower-red">5 000 руб.</span>
						</div>
						<div class="text">
							Кожа омолаживается, разглаживается, обретает ровный тон. 
							Удаляет или уменьшает рубцы и пигментные пятна.
						</div>
						<div class="text">
							Обязательна консультация специалиста!
						</div>
						
					</div>
				</div>
			</div>
			<div class="item" style="background-image: url(<?php echo get_template_directory_uri() ?>/assets/img/baner-1.jpg)">
				<div class="pull-right slider-text left">
					<div class="text-inner">
						<div class="header-text">
							<span class="upper-red">ВЕСЬ МАРТ!</span> <br> <span class="upper-blue">7 процедур RF-лифтинга</span><br> 
							<span class="lower-blue">за</span> <span class="lower-red">14 000 руб.</span> <span class="lower-blue">вместо</span> <span class="lower-red">18 550 руб.!</span>
						</div>
						<div class="text">
							Кожа на лице, шее и подбородке подтягивается и разглаживается. Уменьшаются признаки целлюлита и локальных жировых отложений в области живота, талии и бёдер.
						</div>
						<div class="text">
							Запись на процедуру только после консультации специалиста!
						</div>
						
					</div>
				</div>				
			</div>
		</div>
		<div class="content">
			<div class="row">
				<div class="col-md-4">
					<div class="left">
						<div class="block-header">О клинике</div>
						<div class="article-about">
							<p>Многопрофильный центр эстетической медицины «Клиника ДЕГА» - ваш надежный проводник в мире красоты, здоровья, долголетия!</p>
							<p>Основным принципом нашей работы является индивидуальный подход к каждому Гостю нашей Клиники.</p>
							<p>Специалисты нашей Клиники — это доктора и кандидаты медицинских наук, которые постоянно </p>
							<a class="read-more" href="">Читать подробнее »</a>
						</div>
						
					</div>
				</div>
				<div class="center col-md-8 med-10">
					<div class="title">Популярное среди наших клиентов</div>
					<div class="row med-10">
						<?php 
							$args = array(
								'numberposts' => 8,
								'category'    => 2,
								'orderby'     => 'date',
								'order'       => 'DESC',
								'include'     => array(),
								'exclude'     => array(),
								'meta_key'    => '',
								'meta_value'  =>'',
								'post_type'   => 'post',
								'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
							);

							$posts = get_posts( $args );

							foreach($posts as $post){ setup_postdata($post); ?>
							    <div class="col-md-4 col-sm-4 col-xs-8 bl">
									<a href="<?php echo get_permalink(); ?>">
										<img src="<?php echo get_the_post_thumbnail_url()?>" alt="">
										<div class="tit"><?php the_title() ?></div>
									</a>
								</div>
							<?php }

							wp_reset_postdata(); // сброс

						?>	

					</div>
				</div>
				<div class="col-md-4">
					<div class="right">
						<div class="block-header">Наши специалисты</div>
						<div class="specialists">
							<div class="specialist">
								<img src="<?php echo get_template_directory_uri() ?>/assets/img/sidebar-right.jpg" alt="">
								<div class="name">Макаров Дмитрий Андреевич</div>
								<div class="position">Косметолог, <br> пластический хирург</div>
								<div class="divider"></div>
								<div class="info">Дуэт пластического хирурга и косметолога – яркий тренд современной эстетической </div>
								<a href="" class="read-more">Подробнее о специалисте »</a>
							</div>
							<div class="specialist">
								<img src="<?php echo get_template_directory_uri() ?>/assets/img/sidebar-right.jpg" alt="">
								<div class="name">Макаров Дмитрий Андреевич</div>
								<div class="position">Косметолог, <br> пластический хирург</div>
								<div class="divider"></div>
								<div class="info">Дуэт пластического хирурга и косметолога – яркий тренд современной эстетической </div>
								<a href="" class="read-more">Подробнее о специалисте »</a>
							</div>
							<div class="specialist">
								<img src="<?php echo get_template_directory_uri() ?>/assets/img/sidebar-right.jpg" alt="">
								<div class="name">Макаров Дмитрий Андреевич</div>
								<div class="position">Косметолог, <br> пластический хирург</div>
								<div class="divider"></div>
								<div class="info">Дуэт пластического хирурга и косметолога – яркий тренд современной эстетической </div>
								<a href="" class="read-more">Подробнее о специалисте »</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="appointment-block">
			<div class="inner">
				<div class="title">Запишитесь на приём без звонка и очередей!</div>
				<p>Мы свяжемся с Вами в самое ближайшее время, чтобы уточнить детали Вашего визита!</p>
				<a href="">Записаться на прием</a>
			</div>
		</div>
	</main>

<?php get_footer();

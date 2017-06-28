<?php
/**
 * The template for displaying all single posts
*/

get_header(); ?>

<div class="container">
	<div class="row">
		<div class="col-md-16">
			<?php
				/* Start the Loop */
				while ( have_posts() ) : the_post(); ?>

					<h1><?php the_title(); ?></h1>
					<?php the_content(); ?>
					<br>
					
				<?php endwhile; // End of the loop.
			?>		
		</div>
	</div>
</div>

<?php get_footer();
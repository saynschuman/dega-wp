<?php 

// scripts

function dega_scripts() {
	wp_enqueue_style( 'dega-style', get_stylesheet_uri() );
	if (!is_admin()) {
		wp_enqueue_script('jquery');
	}
	wp_enqueue_script( 'slick', get_theme_file_uri( '/assets/libs/slick/slick.js' ), array(), '1.0', true );
	wp_enqueue_script( 'main', get_theme_file_uri( '/assets/js/main.js' ), array(), '1.0', true );
}

add_action( 'wp_enqueue_scripts', 'dega_scripts' );

// title tag

add_theme_support( 'title-tag' );
$defaults = array(
	'default-color'          => '',
	'default-image'          => '',
	'wp-head-callback'       => '_custom_background_cb',
	'admin-head-callback'    => '',
	'admin-preview-callback' => ''
);
add_theme_support( 'custom-background', $defaults );
?>
<?php
/**
 * Plugin Name: My SPA Plugin
 * Description: A WordPress plugin using React for SPA navigation.
 * Version: 1.0.0
 * Author: Your Name
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Enqueue React app
function my_spa_enqueue_scripts() {
    wp_enqueue_script(
        'my-spa-script',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-element' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
        true
    );
}
add_action( 'admin_enqueue_scripts', 'my_spa_enqueue_scripts' );

// Add menu and subpages
function my_spa_register_menu_page() {
    add_menu_page(
        'Main Page',
        'Main Page',
        'manage_options',
        'main-page',
        'my_spa_render_page',
        'dashicons-admin-site',
        6
    );

    add_submenu_page(
        'main-page',
        'Dashboard',
        'Dashboard',
        'manage_options',
        'main-page',
        'my_spa_render_page'
    );

    add_submenu_page(
        'main-page',
        'Sub Page 1',
        'Sub Page 1',
        'manage_options',
        'main-page#sub-page-1',
        'my_spa_render_page'
    );

    add_submenu_page(
        'main-page',
        'Sub Page 2',
        'Sub Page 2',
        'manage_options',
        'main-page#sub-page-2',
        'my_spa_render_page'
    );

    add_submenu_page(
        'main-page',
        'Sub Page 3',
        'Sub Page 3',
        'manage_options',
        'main-page#sub-page-3',
        'my_spa_render_page'
    );

    add_submenu_page(
        'main-page',
        'Sub Page 4',
        'Sub Page 4',
        'manage_options',
        'main-page#sub-page-4',
        'my_spa_render_page'
    );

    add_submenu_page(
        'main-page',
        'Sub Page 5',
        'Sub Page 5',
        'manage_options',
        'main-page#sub-page-5',
        'my_spa_render_page'
    );
}
add_action( 'admin_menu', 'my_spa_register_menu_page' );

function my_spa_render_page() {
    echo '<div id="my-spa-app"></div>';
}

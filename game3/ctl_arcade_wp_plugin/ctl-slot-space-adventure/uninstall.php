<?php
    global $wpdb;

    $wpdb->query( "DELETE FROM " . $wpdb->prefix .
        "ctl_arcade_games WHERE game_plugin_dir = 'ctl-slot-space-adventure'");
    $wpdb->query( "DELETE FROM " . $wpdb->prefix .
        "ctl_arcade_scores WHERE game_plugin_dir = 'ctl-slot-space-adventure'");
    $wpdb->query( "DELETE FROM " . $wpdb->prefix .
        "ctl_arcade_ratings WHERE game_plugin_dir = 'ctl-slot-space-adventure'");

    delete_option('ctl-slot-space-adventure_do_activation_redirect');
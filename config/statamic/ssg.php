<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Base URL
    |--------------------------------------------------------------------------
    |
    | This base URL will be used when generating URLs to your static site.
    |
    */

    'base_url' => '/',

    /*
    |--------------------------------------------------------------------------
    | Destination
    |--------------------------------------------------------------------------
    |
    | This is the directory where your static site will be written.
    |
    */

    'destination' => storage_path('app/static'),

    /*
    |--------------------------------------------------------------------------
    | Files and Directories
    |--------------------------------------------------------------------------
    |
    | You may define specific files and directories that should be copied
    | over to your static site. If you don't need anything extra, you
    | can leave this array empty.
    |
    */

    'copy' => [
        public_path('video') => 'video',
        public_path('fonts') => 'fonts',
        public_path('img') => 'img',
        public_path('assets') => 'assets',
    ],

    /*
    |--------------------------------------------------------------------------
    | Exclude
    |--------------------------------------------------------------------------
    |
    | Here you may define paths that should not be processed.
    |
    */

    'exclude' => [
        //
    ],

    /*
    |--------------------------------------------------------------------------
    | Glide
    |--------------------------------------------------------------------------
    |
    | If you use Glide for image manipulation, you can define the presets here.
    |
    */

    'glide' => [
        'presets' => [
            // 'thumbnail' => ['w' => 300, 'h' => 200, 'q' => 75, 'fit' => 'crop'],
        ],
    ],

];
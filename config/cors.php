<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', 'api/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'https://localhost:5173',
        'https://laravelreact.localhost/',
        'https://notif-service-v2-dev-c2afdph9exf7h7h7.southcentralus-01.azurewebsites.net/',
        'https://notif-service-v2-staging-gadxb8gkhkf4cwhp.southcentralus-01.azurewebsites.net/'
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,

];

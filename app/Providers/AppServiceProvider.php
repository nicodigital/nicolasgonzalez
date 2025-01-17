<?php

namespace App\Providers;

use App\Tags\PageStatus;
use Illuminate\Support\ServiceProvider;
use Statamic\Facades\File;
use Statamic\Facades\Tags;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class AppServiceProvider extends AddonServiceProvider
{
    protected $tags = [
        'pageStatus' => PageStatus::class,
    ];

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Statamic::vite('app', [
        //     'resources/js/cp.js',
        //     'resources/css/cp.css',
        // ]);
    }
}

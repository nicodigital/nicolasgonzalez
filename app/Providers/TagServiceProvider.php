<?php

namespace App\Providers;

use App\Tags\PageStatus;
use Statamic\Providers\AddonServiceProvider;

class TagServiceProvider extends AddonServiceProvider
{
    protected $tags = [
        'pageStatus' => PageStatus::class,
    ];
}

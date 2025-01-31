<?php

namespace App\Tags;

use Statamic\Tags\Tags;
use Illuminate\Support\Facades\Http;

class GetWorks extends Tags
{
    public function index()
    {
        $response = Http::get('https://nicowebsite.com/wp-json/wp/v2/posts', [
            'per_page' => 6,
            'page' => 1,
            '_embed' => true
        ]);

        if ($response->failed()) {
            return [];
        }

        return $response->json();
    }
}

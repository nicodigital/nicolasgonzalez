<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;

class PageIdentifier extends Modifier
{
    public function index($value, $params, $context)
    {
        if ($context['type'] == 'entry') {
            return $context['slug'];
        }
        
        return $context['current_uri'];
    }
}
<?php
// app/Modifiers/PageStatus.php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;

class PageStatus extends Modifier
{
    public function index($value, $params)
    {
        $target = $params[0] ?? null;
        $active = 'active';
        
        return $value == $target ? $active : '';
    }
}
<?php

if (!function_exists('status')) {
    function status($fileName, $target, $echo = false)
    {
        $active = 'active';
        
        if ($fileName == $target) {
            return $echo ? print($active) : $active;
        }
        
        return '';
    }
}
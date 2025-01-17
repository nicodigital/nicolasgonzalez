<?php
// app/Tags/PageStatus.php
// {{ status file="home" target="{current_url}" }}

namespace App\Tags;

use Statamic\Tags\Tags;

class PageStatus extends Tags
{
    public function index()
    {
        $file = $this->params->get('file');
        $target = $this->params->get('target');
        $class = $this->params->get('class', 'active');

        // Remove leading slash if present
        $file = '/' . ltrim($file, '/');

        // If target is a full URL, get just the path
        if (filter_var($target, FILTER_VALIDATE_URL)) {
            $target = parse_url($target, PHP_URL_PATH);
        } else {
            $target = '/' . ltrim($target, '/');
        }

        // Compare the paths
        if ($file === $target) {
            return $class;
        }

        return '';
    }
}
<?php
ini_set("allow_url_fopen", true)

$assets = opendir("http://maize.index/");

if (is_resource($assets)) {
    if($dh = opendir($assets)) !== false{
    echo($file) "<br>";    
    }
    closedir($dh);
}
?>
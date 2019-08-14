<?php

$uc = null;

if (isset($_GET["uc"]))
{
    // Get URL param use case
    $uc = $_GET['uc'] ;
}

// call base.html
include ("base.html");

if($uc != "")
{
    include ("loader.html");
}

// Switch Use case
switch($uc)
{
    case "main":
        // call navbar.html
        include ("nav.html");
        // Main  content
        include ("parallax.html");
        break;
    default :
        include ("guard.html");
        break;
}

// Footer
include ("footer.html");



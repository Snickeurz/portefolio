<?php

$uc = null;

if (isset($_GET["uc"]))
{
    // Get URL param use case
    $uc = $_GET['uc'] ;
}

// call base.html
include ("base.html");
// call navbar.html
include ("nav.html");

// Switch Use case
switch($uc)
{
    case "main":
        // Main  content
        include ("parallax.html");
        break;

    default :
        include ("guard.html");
        break;
}

// Footer
include ("footer.html");



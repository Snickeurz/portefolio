<?php

$uc = null;

if (isset($_GET["uc"]))
{
    // Get URL param use case
    $uc = $_GET['uc'] ;
}

// call base.html
include("views/common/base.html");

if($uc != "")
{
    include("views/common/loader.html");
}

// Switch Use case
switch($uc)
{
    case "main":
        // call navbar.html
        include("views/common/nav.html");
        // Main  content
        include("views/main/parallax.html");
        // Footer
        include("views/common/footer.html");
        break;
    default :
        include("views/guard/guard.html");
        break;
}




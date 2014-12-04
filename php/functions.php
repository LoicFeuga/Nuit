
<?php

   function secure($string){
	    return htmlentities(stripslashes($string),NULL,'UTF-8');
   }

?>


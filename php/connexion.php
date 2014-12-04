
<?php

      require_once('functions.php');

      $_=array();
      foreach ($_POST as $key => $val) {
          $_[$key]=secure($val);
      }
      foreach ($_GET as $key => $val) {
          $_[$key]=secure($val);
      }

      // Connection au serveur
      try {
          $dns = 'mysql:host=localhost;dbname=test';
          $user = 'root';
          $password = '';
          $db = new PDO( $dns, $user, $password );
      } catch ( Exception $e ) {
          echo "Connection à MySQL impossible : ", $e->getMessage();
          die();
      }

?>



<?php

require_once('connexion.php');

/*
 variable de retour
 qui sera complétée en fonction des données récupérée de la bdd
 la formation d'un tableau est conseillée
 Exemple : 
 //[0] = nom
 //[1] = prenom
 $result[0] = $variable1
 $result[1] = $variable2
*/
$result;




switch($_['action']){

     case 'recuperer_prenom':
         //variable id récupérée du JavaScript
         $id = $_['id'];
         $query_get_prenom = $db->query("SELECT *
                                           FROM utilisateur
                                           WHERE id = '".$id."' ")
         or die ("Erreur SQL !".$query_get_prenom."<br />".mysql_error());

         $query_get_prenom = $query_get_prenom->fetch();

         //Si la query n'est pas vide 
         if(!empty($query_get_prenom)){
             $result[0] = $query_get_prenom['name'];
             $result[1] = 1;
         }else{
             $result[1] = "vide";
         }


     break;

     default:
         $result ="Aucune action définie";
     break;

}


echo '('.json_encode($result).')';

?>


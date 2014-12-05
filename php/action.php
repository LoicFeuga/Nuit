
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

    case 'connexion':
        $id = $_['id'];
        $query_get_prenom = $db->query("SELECT *
                                           FROM personne
                                           WHERE id_personne = '".$id."' ")
         or die ("Erreur SQL !".$query_get_prenom."<br />".mysql_error());


         $query_get_prenom = $query_get_prenom->fetch();

         //Si la query n'est pas vide 
         if(!empty($query_get_prenom)){

             $result[1] = 1;
         }else{
             $result[1] = "vide";
         }

         $result[2]=0;
         session_start();
         $_SESSION['id'] = $result[$query_get_prenom['id_personne']];

    break;
    
    case 'get_missions':
        $get_missions = $db->query("SELECT *
                                           FROM mission
                                           WHERE 1 ")
         or die ("Erreur SQL !".$get_missions."<br />".mysql_error());


         $get_missions = $get_missions->fetch();

         //Si la query n'est pas vide 
         if(!empty($get_missions)){

             $result[1] = $get_missions['latitude'];
             $result[3] = $get_missions['longitude'];
             $result[4] = $get_missions['description'];
         }else{
             $result[1] = "vide";
         }

         $result[2]=0;
    break;


     default:
         $result ="Aucune action définie";
     break;

}


echo '('.json_encode($result).')';

?>


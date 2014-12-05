
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
        $getPersonne = $db->query("SELECT *
                                           FROM personne
                                           WHERE id_personne = '".$id."' ")
         or die ("Erreur SQL !".$getPersonne."<br />".mysql_error());


         $getPersonne = $getPersonne->fetch();

         //Si la query n'est pas vide 
         if(!empty($getPersonne)){

             $result[1] = 1;
         }else{
             $result[1] = "vide";
         }

         $result[2]=0;
         session_start();
         $_SESSION['id'] = $result[$getPersonne['id_personne']];

    break;

    case 'getMissions':

        $getMissions = $db->query("SELECT *
                                           FROM mission ")
         or die ("Erreur SQL !".$getMissions."<br />".mysql_error());

          $getMissions = $getMissions->fetch();

         //Si la query n'est pas vide 
         if(!empty($getMissions)){
             $result[1] = $getMissions['latitude'];
             $result[2] = $getMissions['longitude'];
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


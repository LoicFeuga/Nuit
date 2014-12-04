
function getPrenom(id){
     $.ajax({
         type:"POST",
         url:"./php/action.php?action=recuperer_prenom",
         data: {
             id:id,
             deuxieme_variable:10
         },
         success: function(r) {
             var result = eval(r);

             //result contient maintenant ce qui lui renvoie l'action recuperer_prenom
             //on peut maintenant la traiter en JavaScript

         }

     });
}


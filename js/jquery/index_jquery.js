
$(document).ready(function() {

    $( "p" ).click(function() {
        $( this ).slideUp();
    });

    $("#id_genere").hover(function(){
        $(this).animate({"width":"300px","margin-left":"50px"},1000);
    },function(){
        $(this).animate({"width":"400px","margin-left":"0px"},1000);
    });

});


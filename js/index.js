


$(document).ready(function(){
	

	$("#connexion-personne").click(function(){
		var id = $("#connexion-id").val();


		$.ajax({
			type: "POST",
			url: "./php/action.php?action=connexion",
			data: {
				id: id

			},
			success: function(r) {
				var result = eval(r);
				alert(result[1]);


			}
		});    
		

	});
});
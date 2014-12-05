

	var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],  
	n = 0;  
	function etoileanim(){
		$("div#etoile").css("display","block");
		$("div#etoile").animate({"left": '300px', "top": '300px'}, 800);
		$("div#etoile").fadeOut("fast");
		$("div#etoile").animate({"left": '0px', "top": '0px'}, 2);
		$("div#etoile").css("display","block");

	}

	function etoileanim2(){
		$("div#etoile2").css("display","block");
		$("div#etoile2").animate({"left": '800px', "top": '600px'}, 800);
		$("div#etoile2").fadeOut("fast");
		$("div#etoile2").animate({"left": '300px', "top": '80px'}, 2);
		$("div#etoile2").css("display","block");

	}
	function etoileanim3(){
		$("div#etoile3").css("display","block");
		$("div#etoile3").animate({"left": '900px', "top": '300px'}, 800);
		$("div#etoile3").fadeOut("fast");
		$("div#etoile3").animate({"left": '600px', "top": '0px'}, 2);
		$("div#etoile3").css("display","block");

	}

	$(document).keydown(function (e) {  
		if (e.keyCode === k[n++]) {  
			if (n === k.length) {  
					//etoileanim();
					setInterval("etoileanim();",500); 
					setTimeout(
					function() 
					{
					setInterval("etoileanim2();",500); 
					}, 100);
					setTimeout(
					function() 
					{
					setInterval("etoileanim3();",500); 
					}, 300);
					//setInterval("etoileanim3();",2000); 

				}  
			} else k = 0  ;
		});  

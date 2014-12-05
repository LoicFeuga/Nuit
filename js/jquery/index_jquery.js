
$(document).ready(function() {

    $( "p" ).click(function() {
        $( this ).slideUp();
    });

   function Dopingouin() {
				$('div#mariopingouin').fadeIn('fast');
				$('div#mariopingouin').animate({"left": '1500px'}, 2000);
				$('div#mariopingouin').fadeOut('fast');
	}

function Dopingouin2() {
				$('div#mariopingouin2').css("display","block");
				$('div#mariopingouin2').fadeIn('slow');
				$('div#mariopingouin2').animate({"left": '2000px'}, 2000);
				$('div#mariopingouin2').fadeOut('fast');
	}
function Dopingouin3() {
				$('div#mariopingouin3').css("display","block");
				$('div#mariopingouin3').fadeIn('slow');
				$('div#mariopingouin3').animate({"left": '2000px'}, 2000);
				$('div#mariopingouin3').fadeOut('fast');
	}

	function Domario2() {
				$('div#mario2').css("display","block");

				$('div#mario2').animate({height: '171px', width: '130px', "top": '300px'}, 300);
				$('div#mario2').fadeOut('fast');
	}
	function Domario() {
				$('div#mario').css("display","block");

				$('div#mario').animate({height: '171px', width: '130px', "top": '300px'}, 300);
				$('div#mario').fadeOut('fast');
	}
	function Domario3() {
				$('div#mario3').css("display","block");
				$('div#mario3').animate({height: '171px', width: '130px', "top": '300px'}, 300);
				$('div#mario3').fadeOut('fast');
	}


	var k = [38, 38], 
	n = 0;  

	$(document).keydown(function (e) {  
		if (e.keyCode === k[n++]) {  
			if (n === k.length) {  
				Domario();
				Domario2();
				Domario3();
				setTimeout(
					function() 
					{
					Dopingouin();
					Dopingouin2();
					Dopingouin3();
					}, 300);

				}  
			} else k = 0  ;
		});  
});



$.getScript("./js/jquery/jQueryRotate.js", function(){
});


var rotation = function (){
   $("#oeuf").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
var rotation2 = function (){
   $("#oeuf2").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation2,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}

function animeoeuf(){
          $("#oeuf").css("display","block");
          rotation();
          $("#oeuf").animate({"left":"1250"},2000);
          $("#oeuf").fadeOut("fast");
}

function animeoeuf2(){
          $("#oeuf2").css("display","block");
          rotation2();
          $("#oeuf2").animate({"left":"-100"},2000);
          $("#oeuf2").fadeOut("fast");
}

function animeoeuf3(){
          $("#oeuf").animate({"left":"0","top": "300"},2);
          $("#oeuf").css("display","block");
          rotation();
          $("#oeuf").animate({"left":"550"},2000);
          $("#oeuf").fadeOut("fast");
}

function animeoeuf4(){
          $("#oeuf2").animate({"left":"1200px","top": "300"},2);
          $("#oeuf2").css("display","block");
          rotation2();
          $("#oeuf2").animate({"left":"550"},2000);
          $("#oeuf2").fadeOut("fast");
}
function couple(){
          $("#couple").fadeIn("slow");
          $("#couple").fadeOut("slow");
}

var k = [38, 38], 
  n = 0;  
$(document).keydown(function (e) {  
		if (e.keyCode === k[n++]) {  
			if (n === k.length) { 
          animeoeuf();
          animeoeuf2();
          setTimeout(
            function() 
            {
              animeoeuf3();
              animeoeuf4();
            }, 2200);
          setTimeout(
            function() 
            {
              couple();
            }, 4200);
        }  
			} else k = 0  ;
		});  
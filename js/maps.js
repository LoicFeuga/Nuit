// position qui contiendra
//la latatitude et la longitude de Nice 
// Position par défaut(Nice)
var nice = new google.maps.LatLng(43.7031300, 7.2660800);
//option de la map
var optionsGmaps;
var map;
var latlng;
//Markeur de l'utilisateur 
var marker_utilisateur;
var pos_utilisateur;
//contiendra le Fichier KML
var fichier_kml;
var compteur = 0;
//Tableau de tous les markers
var markers = new Array();


function initialize(){

	navigator.geolocation.getCurrentPosition(appendPosition, displayError, {enableHighAccuracy : true});

	// Options relatives à la carte
	optionsGmaps = {
		center: nice,
		//mapTypeId: ROADMAP,SATELLITE,HYBRID ou TERRAIN
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		//Zoom : 0 = terre entière, 25 = au niveau de la rue
		zoom: 15
	};

	//On instancie la balise map-canvas en tant que google maps
	map = new google.maps.Map(document.getElementById("map-canvas"), optionsGmaps);

	//Instanciation du markeur de l'utilisateur
	//qui aura une zone + un rond bleu
	//
	GeoMarker = new GeolocationMarker();

	GeoMarker.setCircleOptions({
		fillColor: '#808080'
	});



	GeoMarker.setMap(map);



}
 function displayError(error) {
	    var info = "Erreur lors de la géolocalisation : ";
	    switch(error.code) {
	    case error.TIMEOUT:
	    	info += "Timeout !";
	    break;
	    case error.PERMISSION_DENIED:
	    	info += "Vous n’avez pas donné la permission";
	    break;
	    
	    case error.POSITION_UNAVAILABLE:
	    	info += "La position n’a pu être déterminée";
	    break;
	    
	    case error.UNKNOWN_ERROR:
	    	info += "Erreur inconnue";
	    break;
	    }
	    alert(info);
    }


function appendPosition(position) {
        // Calculate distance from last position if available
      
      	pos_utilisateur = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


      	map.setCenter(pos_utilisateur);

	 var marker = new google.maps.Marker({
      position: pos_utilisateur,
      map: map,
      title: 'Hello World!'
 	 });

    }

$(document).ready(function(){
initialize();
alert('ok');
});
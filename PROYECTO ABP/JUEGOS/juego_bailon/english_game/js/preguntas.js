Quizzly = ( function(){
	var counter = 0;
	var puntaje = 0;
	var respuestas = [];
	var preguntadas = [
			//pregunta1 
			{
				pregunta:"The radio is a device that sends through?",
				opciones: [
					"Multipolar Cable",
					"Magnetic wave",
					"Mandalorian wave",
                    "Unipolar Cable"
				],
				respuesta: 999/333 - 2 //1
			},
			//pregunta2 
			{
				pregunta:"What is speed in terms of Radio?",
				opciones: [
					"Transmitter to receiver travel time",
					"This not exists in the Radio",
					"Hertz Wave Numbers",
					"The distance between one wave peak and the next"
				],
				respuesta: 4767/4767 - 1 //0
			},
			//pregunta3
			 {
				pregunta:"What is the wavelength?",
				opciones: [
					"Time it takes for the wave to travel the path from the Transmitter to the Receiver",
					"Number of waves that reach us and are measured in Hertz",
					"Distance between one wave peak and the next",
					"None Of The Above"
				],
				respuesta: 11%3//2
			},
			//pregunta4 
			{
				pregunta:"Which of the following statements is true?",
				opciones: [
					"The first radio background dates back to the 19th century",
					"The first radio background dates from the 20th century",
					"The first radio background dates from the 21st century",
					"None Of The Above"
					],
				respuesta: 0
			},
			//pregunta5
			 {
				pregunta:"Who invented the Morse code?",
				opciones: [
					"Pilar Rubio",
					"Peter Pan",
					"Ignatius Farray",
					"None Of The Above"	
				],
				respuesta: 2664/888 
			},
			//pregunta6
			 {
				pregunta:"Who was the first discoverer of the sounds heard by cable?",
				opciones: [
					"Lionel Andrés Messi",
					"Graham Bell",
					"Alessandro Volta",
					"Maria Del Carmen Hinojosa"
				],
				respuesta: 777/777//1
			},
			//pregunta7
			 {
				pregunta:"What is AM?",
				opciones: [
					"That's relative",
					"Below Modulation with 10KHz bandwidth (with low amplitude)",
					"Below Modulation with 10KHz bandwidth (with great amplitude)",
					"None Of The Above"
				],
				respuesta:  886/443// 2
			},
			//pregunta8
			 {
				pregunta:"What is FM?",
				opciones: [
					"Less wavelength than AM but more speed",
					"That's relative",
					"Greater wavelength than FM and more speed",
					"None Correct"

				],
				respuesta: 0
			},
			//pregunta9 
			{
				pregunta:"Which of the following is a radio component?",
				opciones: [
					"Drone",
					"Ping",
					"Diode",
					"Radio? Does that still exist?"

				],
				respuesta:  666/333 //2
			},
			//pregunta10
			 {
				pregunta:"What is the speaker?",
				opciones: [
					"Is a dog",
					"A Person that talks",
					"Part that configures the antenna and Wi-Fi",
					"Part that converts the signal captured by the antenna and processed by the diode, into audio"
				],
				respuesta:  13 % 5 //3 
			},
			//pregunta11
			 {
				pregunta:"What is the coil?",
				opciones: [
					"Synchronize the schedule on the radio",
					 "Allows synchronization of specific radio signals",
					 "Does Magic Things",
					 "All right"
				],
				respuesta:  8888/1111-7 //1
			}];	
	return {
		getCantidad	: function(){
			return preguntadas.length;
		},
		getCounter	: function(){
			return counter;
		},
		setCounter	: function(){
			return counter++;
		},
		getQuestion : function(question){
						return  preguntadas[question].pregunta;
		},
		getOptions: function(question){
						return  preguntadas[question].opciones;
		},
		getPuntaje : function(){
					  for(x in preguntadas){
					  		if( respuestas[x] == preguntadas[x].respuesta){
					  			puntaje += 1;
					  		}

					  };
					return puntaje + "/11" ;
		},
		setRespuestas : function(respuesta){
				respuestas.push(respuesta);
		},
		getRespuestas : function(){
				return respuestas;
		},

	} 		
	})();
  
		
$(document).ready(main);


function main(){

	cargarSection(0);
};		
	
 function cargarSection(pregunta){
	$("#opciones").html("");
	 
 	if( pregunta <  ( Quizzly.getCantidad()   ) ){
 		var question  = Quizzly.getQuestion(pregunta); 	
	 	var opciones  = Quizzly.getOptions(pregunta);

		$("#Pregunta").html("<p>" + question + "</p>");
		for(var i = 0, x = opciones.length; i < x ; i++){
			
			$("#opciones").append("<p class=\"respuesta\" id=\" " + i  +  " \"> <span class=\"opcionesN + " +  i + " \"> "  + opciones[i] + "</span></p>");
			};

	}else if(pregunta  == (Quizzly.getCantidad())){
		var nombre = prompt("Registra Tu nombre");
		var puntaje = Quizzly.getPuntaje();
		
		/*function imagenbobby(){
			var imagen = new Image();
			imagen.onload = imagenCargada;
			imagen.src = "../imagenes/bobby_deglane.jpg";
			return imagen;
		}
		function imagenignatius(){
			var imagen = new Image();
			imagen.onload = imagenCargada;
			imagen.src = "../imagenes/ignatius_farray.jpg";
			imagen.width= "200px";
			imagen.height= "200px";
			return imagen;
		}
		function imagenluis(){
			var imagen = new Image();
			imagen.onload = imagenCargada;
			imagen.src = "../imagenes/luis_del_olmo.jpg";
			return imagen;
		}
 		
		if (puntaje < 5) {
			imagenignatius();
			$("#Pregunta").html(nombre +" lograste " +  puntaje +" puntos!" + imagenignatius());
			localStorage.setItem( nombre, puntaje, imagenignatius());
		}
		else if((puntaje > 5) && (puntaje < 11)){
			imagenbobby();
		}
		else{
			var z = document.createElement("IMG");
			z.setAttribute("src","../imagenes/luis_del_olmo.jpg");
			z.setAttribute("width", "220");
			z.setAttribute("height", "120");
			z.setAttribute("alt","Luis Del Olmo alias perfect!");
			document.getElementById("resul").innerHTML = z; 
			localStorage.setItem(imagen);
		}*/
		}
		/*$("#Pregunta").html(nombre +" lograste " +  puntaje +" puntos!" + imagen);
		localStorage.setItem( nombre, puntaje);*/
		/*
			PONER IMAGEN AQUI
		*/  
 	};
 	
	$(".respuesta").on("click",responder);
 /*}*/

 function responder(){
 	var pregunta = Quizzly.setCounter();
 	var respuesta = $(this).attr("id");
 		Quizzly.setRespuestas(respuesta);
		 cargarSection(++pregunta);
 };
Quizzly = ( function(){
	var counter = 0;
	var puntaje = 0;
	var respuestas = [];
	var preguntadas = [
			//pregunta1 
			{
				pregunta:"La radio es un aparato que envía través de?",
				opciones: [
					"Cable Multipolar",
					"Onda Magnética",
					"Onda Mandalorian",
                    "Cable Unipolar"
				],
				respuesta: 999/333 - 2 //1
			},
			//pregunta2 
			{
				pregunta:"¿Que es la velocidad en términos de Radio?",
				opciones: [
					"Tiempo de recorrido de transmisor a receptor",
					"No existe esto en Radio",
					"Numeros de Ondas en Hertz",
					"Distancia entre un pico de onda y el siguiente"
				],
				respuesta: 4767/4767 - 1 //0
			},
			//pregunta3
			 {
				pregunta:"Que es la longitud de Onda?",
				opciones: [
					"Tiempo que la onda tarda en recorrer el camino del Transmisor al Receptor",
					"Número de ondas que nos llegan y se miden en Hertz",
					"Distancia entre un pico de onda y el siguiente",
					"Ninguna de las anteriores"
				],
				respuesta: 11%3//2
			},
			//pregunta4 
			{
				pregunta:"¿Cuál de las siguientes afirmaciones es verdadera?",
				opciones: [
					"Los primeros antecedentes de la radio datan del siglo XIX",
					"Los primeros antecedentes de la radio datan del siglo XX",
					"Los primeros antecedentes de la radio datan del siglo XXI",
					"Ninguna de las anteriores"
					],
				respuesta: 0
			},
			//pregunta5
			 {
				pregunta:"Quien Inventó el código Morse?",
				opciones: [
					"Pilar Rubio",
					"Peter Pan",
					"Ignatius Farray",
					"Ninguna de las anteriores"	
				],
				respuesta: 2664/888 
			},
			//pregunta6
			 {
				pregunta:"Quien fué el primer Descubridor de los sonidos escuchados por cable?",
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
				pregunta:"Que es AM?",
				opciones: [
					"Eso es relativo",
					"Por debajo de la Modulacion con ancho de banda 10KHz (con baja amplitud)",
					"Por debajo de la Modulacion con ancho de banda 10KHz (con gran amplitud)",
					"Ninguna de las anteriores"
				],
				respuesta:  886/443// 2
			},
			//pregunta8
			 {
				pregunta:"Que es FM?",
				opciones: [
					"Menor Amplitud de onda que AM pero más velocidad",
					"Eso es Relativo",
					"Mayor Amplitud de onda que FM y más velocidad",
					"Ninguna Correcta"

				],
				respuesta: 0
			},
			//pregunta9 
			{
				pregunta:"Cual de los siguientes es un componente de la radio?",
				opciones: [
					"Dron",
					"Ping",
					"Diodo",
					"Radio? Eso existe todavia?"

				],
				respuesta:  666/333 //2
			},
			//pregunta10
			 {
				pregunta:"Que es el parlante?",
				opciones: [
					"Es un perro",
					"Una Persona que habla",
					"Parte que configura la antena y el wifi",
					"Parte que convierte la señal captada por la antena y procesada por el diodo, en audio"
				],
				respuesta:  13 % 5 //3 
			},
			//pregunta11
			 {
				pregunta:"Que es la bobina?",
				opciones: [
					"Permite sincronizar el horario en la radio",
					 "Permite sincronizar señales de radio concretas",
					 "Hace magia",
					 "Todas Correctas"
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
		
		function imagenbobby(){
			var imagen = new Image();
			imagen.onload = imagenCargada;
			imagen.src = "../imagenes/bobby_deglane.jpg";
			return imagen;
		}
		function imagenignatius(){
			var imagen = new Image();
			/*imagen.onload = imagenCargada;*/
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
			/*imagenignatius();*/
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
		}
		}
		/*$("#Pregunta").html(nombre +" lograste " +  puntaje +" puntos!" + imagen);
		localStorage.setItem( nombre, puntaje);*/
		/*
			PONER IMAGEN AQUI
		*/  
 	};
 	
	$(".respuesta").on("click",responder);
 }

 function responder(){
 	var pregunta = Quizzly.setCounter();
 	var respuesta = $(this).attr("id");
 		Quizzly.setRespuestas(respuesta);
		 cargarSection(++pregunta);
 };
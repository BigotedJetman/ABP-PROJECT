function main(){cargarSection(0)}
function cargarSection(e){
    if($("#opciones").html(""),e<Quizzly.getCantidad()){
        var a=Quizzly.getQuestion(e),n=Quizzly.getOptions(e);$("#Pregunta").html("<p>"+a+"</p>");
        for(var r=0,s=n.length;r<s;r++)$("#opciones").append('<p class="respuesta" id=" '+r+' "> <span class="opcionesN + '+r+' "> '+n[r]+"</span></p>")}
    else if(e==Quizzly.getCantidad()){var o=prompt("Registra Tu nombre"),t=Quizzly.getPuntaje();$("#Pregunta").html(o+" lograste "+t+" puntos!"),localStorage.setItem(o,t)}$(".respuesta").on("click",responder)}
        function responder(){var e=Quizzly.setCounter(),a=$(this).attr("id");
        Quizzly.setRespuestas(a),cargarSection(++e)}Quizzly=function(){var e=0,a=0,n=[],r=[{pregunta:"La radio es un aparato que envía través de?",
                opciones:["Cable Multipolar","Onda Magnética","Onda Mandalorian","Cable Unipolar"],respuesta:1},
            {pregunta:"¿Que es la velocidad en términos de Radio?",
                opciones:["Tiempo de recorrido de transmisor a receptor","No existe esto en Radio","Numeros de Ondas en Hertz","Distancia entre un pico de onda y el siguiente"],respuesta:0},
            {pregunta:"Que es la longitud de Onda?",
                opciones:["Tiempo que la onda tarda en recorrer el camino del Transmisor al Receptor","Número de ondas que nos llegan y se miden en Hertz","Distancia entre un pico de onda y el siguiente","Ninguna de las anteriores"],respuesta:2},
            {pregunta:"¿Cuál de las siguientes afirmaciones es verdadera?",
                opciones:["Los primeros antecedentes de la radio datan del siglo XIX","Los primeros antecedentes de la radio datan del siglo XX","Los primeros antecedentes de la radio datan del siglo XXI","Ninguna de las anteriores"],respuesta:0},
            {pregunta:"Quien Inventó el código Morse?",
                opciones:["Pilar Rubio","Peter Pan","Ignatius Farray","Ninguna de las anteriores"],respuesta:3},
            {pregunta:"Quien fué el primer Descubridor de los sonidos escuchados por cable?",
                opciones:["Lionel Andrés Messi","Graham Bell","Alessandro Volta","Maria Del Carmen Hinojosa"],respuesta:1},
            {pregunta:"Que es AM?",
                opciones:["Eso es relativo","Por debajo de la Modulacion con ancho de banda 10KHz (con baja amplitud)","Por debajo de la Modulacion con ancho de banda 10KHz (con gran amplitud)","Ninguna de las anteriores"],respuesta:2},
            {pregunta:"Que es FM?",
                opciones:["Menor Amplitud de onda que AM pero más velocidad","Eso es Relativo","Mayor Amplitud de onda que FM y más velocidad","Ninguna Correcta"],respuesta:0},
            {pregunta:"Cual de los siguientes es un componente de la radio?",
                opciones:["Dron","Ping","Diodo","Radio? Eso existe todavia?"],respuesta:2},
            {pregunta:"Que es el parlante?",
                opciones:["Es un perro","Una Persona que habla","Parte que configura la antena y el wifi","Parte que convierte la señal captada por la antena y procesada por el diodo, en audio"],respuesta:3},
            {pregunta:"Que es la bobina?",
                opciones:["Permite sincronizar el horario en la radio","Permite sincronizar señales de radio concretas","Hace magia","Todas Correctas"],respuesta:1},
            ];
            return{getCantidad:function(){return r.length},getCounter:function(){return e},setCounter:function(){return e++},getQuestion:function(e){return r[e].pregunta},getOptions:function(e){return r[e].opciones},getPuntaje:function(){for(x in r)n[x]==r[x].respuesta&&(a+=1); return a+"/11"},setRespuestas:function(e){n.push(e)},getRespuestas:function(){return n}}}(),$(document).ready(main);
function volver_inicio(){
    location.href="../inicio/inicio.html"
    var inici = location.href
    return inici
}
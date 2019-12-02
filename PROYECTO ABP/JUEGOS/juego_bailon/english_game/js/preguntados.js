function main(){cargarSection(0)}
function cargarSection(e){
    if($("#opciones").html(""),e<Quizzly.getCantidad()){
        var a=Quizzly.getQuestion(e),n=Quizzly.getOptions(e);$("#Pregunta").html("<p>"+a+"</p>");
        for(var r=0,s=n.length;r<s;r++)$("#opciones").append('<p class="respuesta" id=" '+r+' "> <span class="opcionesN + '+r+' "> '+n[r]+"</span></p>")}
    else if(e==Quizzly.getCantidad()){var o=prompt("Registra Tu nombre"),t=Quizzly.getPuntaje();$("#Pregunta").html(o+" lograste "+t+" puntos!"),localStorage.setItem(o,t)}$(".respuesta").on("click",responder)}
        function responder(){var e=Quizzly.setCounter(),a=$(this).attr("id");
        Quizzly.setRespuestas(a),cargarSection(++e)}Quizzly=function(){var e=0,a=0,n=[],r=[{pregunta:"The radio is a device that sends through?",
                opciones:["Multipolar Cable","Magnetic wave","Mandalorian wave","Unipolar Cable"],respuesta:1},
            {pregunta:"What is speed in terms of Radio?",
                opciones:["Transmitter to receiver travel time","This not exists in the Radio","Hertz Wave Numbers","The distance between one wave peak and the next"],respuesta:0}, 
            {pregunta:"What is the wavelength?",
                opciones:["Time it takes for the wave to travel the path from the Transmitter to the Receiver","Number of waves that reach us and are measured in Hertz","Distance between one wave peak and the next","None of the above"],respuesta:2},
            {pregunta:"Which of the following statements is true?",
                opciones:["The first radio background dates back to the 19th century","The first radio background dates from the 20th century","The first radio background dates from the 21st century","None of the above"],respuesta:0},
            {pregunta:"Who invented the Morse code?",
                opciones:["Pilar Rubio","Peter Pan","Ignatius Farray","None of above"],respuesta:3},
            {pregunta:"Who was the first discoverer of the sounds heard by cable?",
                opciones:["Lionel Andrés Messi","Graham Bell","Alessandro Volta","Maria Del Carmen Hinojosa"],respuesta:1},
            {pregunta:"What is AM?",
                opciones:["That's relative","Below Modulation with 10KHz bandwidth (with low amplitude)","Below Modulation with 10KHz bandwidth (with great amplitude)","None of the above"],respuesta:2},
            {pregunta:"What is FM?",
                opciones:["Less wavelength than AM but more speed","That's relative","Greater wavelength than FM and more speed","None Correct"],respuesta:0},
            {pregunta:"Which of the following is a radio component?",
                opciones:["Drone","Ping","Diode","Radio? Does that still exist?"],respuesta:2},
            {pregunta:"What is the speaker?",
                opciones:["Is a dog","A Person that talks","Part that configures the antenna and Wi-Fi","Part that converts the signal captured by the antenna and processed by the diode, into audio"],respuesta:3},
            {pregunta:"What is the coil?",
                opciones:["Synchronize the schedule on the radio","Allows synchronization of specific radio signals","Does magic things","All right"],respuesta:1},
            ];
            return{getCantidad:function(){return r.length},getCounter:function(){return e},setCounter:function(){return e++},getQuestion:function(e){return r[e].pregunta},getOptions:function(e){return r[e].opciones},getPuntaje:function(){for(x in r)n[x]==r[x].respuesta&&(a+=1); return a+"/11"},setRespuestas:function(e){n.push(e)},getRespuestas:function(){return n}}}(),$(document).ready(main);
function volver_inicio(){
    location.href="../inicio/inicio.html"
    var inici = location.href
    return inici
}
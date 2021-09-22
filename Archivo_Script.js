

function ejecuta () {

    for(var i=0; i<3; i++){

document.getElementsByTagName("p")[i].onclick=saludo

    }

// document.getElementById("importante").onclick=saludo;



}

function saludo(){

alert("Todo bien y vos?")

}

window.onload=ejecuta;

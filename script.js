var texto = 5; //esto hace que la variable sea de tipo numerico que en un fut se puede cambiar

var campoTexto = document.getElementById("txt");//.value;
var texto = ""; //campoTexto.value = "";

function funcion(txt){
    //alert(x);
    texto = campoTexto.value;
    alert(texto);
}
//funcion(7,9); esto manda una ventana emergente
funcion();

function borrar(){
    campoTexto.value = "";
}

function cambiarColor(){
    //declaracion de variables dentro de la funcion p/colores
    let rojo = Math.floor(Math.random() *256); //lo que hace floor es redondear y lo que hace random es 
    let verde = Math.floor(Math.random() *256); //dar un num de entre 0 < 1
    let azul = Math.floor(Math.random() *256); //el rgb mayor es 255**
    let colorFondo = "rgb(" +rojo +"," +verde +"," +azul +")";//codigo del color que será el fondo
    document.getElementById("colorcito").style.backgroundColor = colorFondo; //toma el num q le dio lo anterior y lo pone como color de fondo
}
var artinp = document.getElementById("art");
var preinp = document.getElementById("precio");

var total = 0;

const lugarticket = document.getElementById("ticket");

function agregar(){
    pesos = parseInt(preinp.value);
    total = total + pesos;

    let productos = document.createElement('ol');
    productos.innerHTML = ' ' + artinp.value + '_ _ _ _ _ $' + pesos;
    lugarticket.appendChild(productos);

    artinp.value='';
    preinp.value='';

    let final = document.createElement('p');
    final.innerHTML = '   Total:  ' + parseInt(total);
    lugarticket.appendChild(final);
}

/* no pude hacer funcionar esta funcion:/
function dinero(total) {
    let final = document.createElement('p');
    final.innerHTML = '   Total:  ' + parseInt(total);
    lugarticket.appendChild(final);
}*/

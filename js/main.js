alert ("Bienvenido a '21'");

alert ("El objetivo de este juego es sumar 21. \n Te daré tres cartas, y decidirás tu destino al aceptar otra o no");

let añoNacimiento = Number(prompt("Ingrese su año de nacimiento"));

if (añoNacimiento > 1920 && añoNacimiento <= 2005){
    console.log("Es mayor de edad");
}else if (añoNacimiento >= 2006){
    alert("Es menor de edad, no puede jugar");
}else {
    console.log ("Error, ingrese un año de nacimiento válido");
}

alert ("Mezclando cartas");
function repartirCartas() {
    return Math.floor(Math.random() * 11) + 1;
}

function jugar() {

    let sumaDeCartas = 0

    for (let i = 0; i <3 ; i++){
        repartirCartas();
        let carta = repartirCartas ();
        alert ("Su carta es " + carta);
        sumaDeCartas += carta;
    }

    alert ("La suma de tus cartas es " + sumaDeCartas);

    while (sumaDeCartas < 21 && confirm("¿Querés otra carta?")){
        let carta = repartirCartas ();
        alert ("Su carta es " + carta);
        sumaDeCartas += carta;
        alert ("La suma de tus cartas es " + sumaDeCartas);
    }
    
    if (sumaDeCartas === 21 ){
        alert("Winner winner, chicken dinner.\n Llegaste a 21 y ¡ganaste!");
    } else if (sumaDeCartas < 21){
        alert ("No llegaste a 21 :( \n F5 para volver a intentar")
    } else {
        alert ("Perdiste. Te pasaste de 21.\n F5 para volver a intentar")
    }
}

jugar();
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt ("Ingrese su apellido:");
let nombreCompleto = nombre + " " + apellido;
alert ("¡Bienvenido! " + nombreCompleto);

let pedirPrestamo = prompt("¿Le gustaría solicitar un préstamo con nosotros? (Si, No)").toUpperCase();
let valorPrestamo;

const TNA = 138;
const TEA = 268;
const CFTEA = 376;
const maximoSolicitado = 2000000;
let interesCuota;

if (pedirPrestamo == "SI"){
    valorPrestamo = parseFloat(prompt("¡Genial! Indíquenos la suma a la cual quiere acceder (Máx: $"+ maximoSolicitado + ")"));
    while(valorPrestamo > maximoSolicitado){
        valorPrestamo = parseFloat(prompt("¡Genial! Indíquenos la suma a la cual quiere acceder(Máx: $"+ maximoSolicitado + ")"));

        if (valorPrestamo <= maximoSolicitado){
            break;
        }
    }
    alert(`Muy bien, $${valorPrestamo} serán depositados en su cuenta bancaria`);
}else{
    alert("¡Lo invitamos a seguir navegando!");
}

let cantidadCuotas = parseInt(prompt("Indique la cantidad de cuotas (12/24/36):"));

while(cantidadCuotas != 12 && cantidadCuotas != 24 && cantidadCuotas != 36){
    alert("Por favor, ingrese la cantidad de cuotas permitidas");
    let cantidadCuotas = parseInt(prompt("Indique la cantidad de cuotas (12/24/36):"))
}

if(cantidadCuotas == 12){
    interesCuota = 30;
} else if (cantidadCuotas == 24){
    interesCuota = 40;
} else {
    interesCuota = 50;
}

console.log ("Interés cuota: " + interesCuota);

let cuotaPura = valorPrestamo / cantidadCuotas;
let interesPrestamo = interesCuota / cantidadCuotas;
let tnaCuota = TNA / cantidadCuotas;
let teaCuota = TEA / cantidadCuotas;
let cfteaCuota = CFTEA / cantidadCuotas;

let interesPorCuota = (cuotaPura * interesPrestamo) / 100;
let interesTnaCuota = (cuotaPura * tnaCuota) / 100;
let interesTeaCuota = (cuotaPura * teaCuota) / 100;
let interesCfteaCuota = (cuotaPura * cfteaCuota) / 100;

let valorCuota = cuotaPura + interesPorCuota + interesTnaCuota + interesTeaCuota + interesCfteaCuota;

alert(`Su préstamo de $${valorPrestamo} será devuelto en ${cantidadCuotas} cuotas con un interés del ${interesCuota}%. Cada cuota tendrá un valor de $${valorCuota}`)

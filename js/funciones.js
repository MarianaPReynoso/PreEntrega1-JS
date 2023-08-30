function cuotas(){
    let cantidadCuotas = parseInt(prompt("Indique la cantidad de cuotas (12/24/36):"));

    while(cantidadCuotas != 12 && cantidadCuotas != 24 && cantidadCuotas != 36){
        alert("Por favor, ingrese la cantidad de cuotas permitidas");
        let cantidadCuotas = parseInt(prompt("Indique la cantidad de cuotas (12/24/36):"))
    }

    return cantidadCuotas;
}
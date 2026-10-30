const cupoCata = 8;
const inscritos = 5;
// condicional de cata abierta o llena
// si el numero de cupos es mayor que el numero de inscritos devuelve "hay cupos, abrir reserva"
// si no devuelve "cata llena, ofrecer lista de espera"

if (cupoCata > inscritos) {
    console.log("Hay cupos, abrir reserva");
    
} else {
    console.log("Cata llena, ofrecer lista de espera ");
    }  

    // operadores de operacion 

    8 > 5 // true
    3 < 10 // true
    8 >= 8 // true
    4 <= 9 // true 
    5 === 5 // true 
    5 !== 3 // true 

    // revisa el codigo antes de predecir 
    const tazasReservadasHoy = 47;
    const maxTazasdia = 50; 

    if (tazasReservadasHoy >= maxTazasdia) {
        console.log("cerrar reservas del dia");
        } else {
            console.log("aun hay disponibilidad");
            }
            // un pedazo de codigo que corre, pero esta mal 

            const cantidadTazas = 2;

            if (cantidadTazas > 2) {
                console.log("soo puedes reservar maximo 2 tazas");
            } else {
                console.log("reserva confirmada");
                 }
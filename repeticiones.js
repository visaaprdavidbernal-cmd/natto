console.log("V60");
console.log("Kyoto drip");
console.log("Siphon");
console.log("Prensa francesa");
 // lista de metodos, se llaman arrays
 const metodos = ["V60", "Kyoto drip", "Siphon", "Prensa francesa"]

 // instruccion que recorre la lista y hace algo con cada elemento 

 for (const metodo of metodos){
    console.log(metodo);
    }
    console.log("fin del programa");
      

    // ejemplo de bucle de reservas de un dia 

    const reservasDelDia = [2, 1, 2, 1, 2]
    let totalTazas = 0;

    for (const cantidad of reservasDelDia){
       totalTazas = totalTazas + cantidad
    } 

    // ejemplo de un for que corre pero no hace lo que queremos 
    //for(const cantidad of reservasDelDia) {
      //  totalTazas = cantidad;
    // }
    console.log(totalTazas);
    
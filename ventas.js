const conexion2 = require ('./conectar');
function consultarVentas(){
    var tablaR = document.getElementById("VentasMensuales");
    $query = `SELECT * FROM mecanico.ventamensual ; `;
conexion2.query($query, function (err, rows, fields){
    if (err){
        console.log("error en query");
        console.log(err);
        return;
    } else {
        console.log("ejecutado correctamente", rows);

        const long= rows.length;
        for (i=0; i<long; i++){
           var newRow = tablaR.insertRow(-1);
    
           var celdaMes = newRow.insertCell(0);
           var celdaCantidad = newRow.insertCell(1);
           

    
           var textoMes = document.createTextNode(rows[i].mes);
           var textoCantidad= document.createTextNode(rows[i].cantidadVendida);
           celdaMes.appendChild(textoMes);
           celdaCantidad.appendChild(textoCantidad);

           
      
           
    }
   
    }
}

)
} 


function consultarVentaAnual(){
    var tablaR = document.getElementById("VentaAnual");
    $query = `select mes,max(cantidadVendida) as mayorVenta from ventaMensual;`;
conexion2.query($query, function (err, rows, fields){
    if (err){
        console.log("error en query");
        console.log(err);
        return;
    } else {
        console.log("ejecutado correctamente", rows);

        const long= rows.length;
        for (i=0; i<long; i++){
           var newRow = tablaR.insertRow(-1);
    
           var celdaCantidad = newRow.insertCell(0);
           var celdaMes = newRow.insertCell(1);

           var textoCantidad = document.createTextNode(rows[i].mayorVenta);
           var textoMes = document.createTextNode(rows[i].mes);
           celdaCantidad.appendChild(textoCantidad);
           celdaCantidad.appendChild(textoMes); 
           


           
    }
   
    }
}

)
} 

function cargarFunciones(){
    consultarVentas();
    consultarVentaAnual();

}
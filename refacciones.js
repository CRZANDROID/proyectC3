const conexion2 = require ('./conectar');
function consultarRefacciones(){
    var tablaR = document.getElementById("refacciones");
    $query = `SELECT * FROM refacciones`;
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
    
           var celdaId = newRow.insertCell(0);
           var celdaNombre = newRow.insertCell(1);
           var celdaCantidad = newRow.insertCell(2);
           var celdaPrecio = newRow.insertCell(3);

    
           var textoid = document.createTextNode(rows[i].idrefacciones);
           var textoNombre= document.createTextNode(rows[i].nombreRefa);
           var textoCantidad = document.createTextNode(rows[i].cantidad);
           var textoPrecio = document.createTextNode(rows[i].Precio);
           celdaId.appendChild(textoid);
           celdaNombre.appendChild(textoNombre);
           celdaCantidad.appendChild(textoCantidad);
           celdaPrecio.appendChild(textoPrecio); 
    }
   
    }
}

)
} 
function agregarDatos(){
    var id_refaccion = document.getElementById("id").value; 
    var nombre=document.getElementById("nombre").value;
    var cantidad=document.getElementById("cantidad").value;
    var precio= document.getElementById("Precio").value;
    $query = `INSERT INTO refacciones (idrefacciones,nombreRefa,cantidad,Precio) VALUES ('${id_refaccion}','${nombre}','${cantidad}','${precio}')`;
    conexion2.query($query, function (err, rows){
        if (err){
            console.log("error en el query");
            console.log(err);
            return;
        }
        console.log("ejecutado correctamente");
        if (rows.length == 0) {
            alert("Datos incorrectos")
        }
        else {
            location.href = "refacciones.html"
        }
    }
    );
    
    }
    function modificarDatos() {
        let id_refaccion = document.getElementById("idRefa").value;
        let cantidad = document.getElementById("cantidadRefa").value; 
        let user = document.getElementById("nombreRefa").value;
        let precio = document.getElementById("nuevoPrecio").value;
        $query = `UPDATE refacciones SET nombreRefa='${user}', cantidad = '${cantidad}', Precio = '${precio}' WHERE idrefacciones = '${id_refaccion}'`;
        conexion2.query($query, function (err, rows, fields) {
            if (err) {
                console.log("Error en el query");
                console.log(err);
                return;
            }
            else {
                console.log("todo bien", rows, fields)
    
                if (rows.length == 0) {
                   
                }
                else {
                    location.href = "refacciones.html"
                }
            }
        })
    }
    function eliminarDatos(){
        var idRefa=document.getElementById("id_eliminar").value;
        $query = `DELETE  FROM refacciones WHERE (nombreRefa='${idRefa}')`;
        conexion2.query($query, function (err, rows){
            if (err){
                console.log("error en el query");
                console.log(err);
                return;
            }
            console.log("ejecutado correctamente");
        
        }
        );// location.href = "refacciones.html";
        }

        function verReparaciones(){
            var tablaR = document.getElementById("ventaRefacciones");
            $query = 
            `select refacciones.idrefacciones, refacciones.nombreRefa, refacciones.Precio, cliente.idcliente ,cliente.nombreCliente
            from refacciones
            inner join cliente
            on  refacciones.idrefacciones = cliente.idcliente `;
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
            
                   var celdaId = newRow.insertCell(0);
                   var celdaNombre = newRow.insertCell(1);
                   var celdaprecio = newRow.insertCell(2);
                   var celdaIdEmpleado = newRow.insertCell(3);
                   var celdaNombreEmpleado = newRow.insertCell(4); 
            
                   var textoid = document.createTextNode(rows[i].idrefacciones);
                   var textoNombre= document.createTextNode(rows[i].nombreRefa);
                   var textoprecio = document.createTextNode(rows[i].Precio);
                   var textoIdCliente = document.createTextNode(rows[i].idcliente);
                   var textoNombreCliente = document.createTextNode(rows[i].nombreCliente);
                   celdaId.appendChild(textoid);
                   celdaNombre.appendChild(textoNombre);
                   celdaprecio.appendChild(textoprecio); 
                   celdaIdEmpleado.appendChild(textoIdCliente);
                   celdaNombreEmpleado.appendChild(textoNombreCliente);
            }
           
            }
        }
        
        )
        } 
        
        
        function cargarFunciones(){
            consultarRefacciones(); 
            verReparaciones();
        }

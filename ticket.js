const conexion2 = require ('./conectar');
function verTicket(){
    var idcliente= document.getElementById("cliente").value;
    var tablaR = document.getElementById("ticket");
    $query = 
    `select cliente.idcliente, cliente.nombreCliente, automovil.idautomovil, automovil.estado, automovil.placa
    from cliente 
    inner join automovil
    on cliente.idcliente = automovil.idautomovil
    where idcliente= '${idcliente}';` ;
conexion2.query($query, function (err, rows, fields){
    if (err){
        console.log("error en query");
        console.log(err);
        return;
    } else {
        console.log("ejecutado correctamente", rows);
        const long= rows.length;
        if (rows.length==0) {
            alert("ID NO ENCONTRADO");
        }else {
            for (i=0; i<long; i++){
                var newRow = tablaR.insertRow(-1);
         
                var celdaIdrefa = newRow.insertCell(0);
                var celdaNombre = newRow.insertCell(1);
                var celdaIdAuto = newRow.insertCell(2);
                var celdaEstado = newRow.insertCell(3);
                var celdaPlaca = newRow.insertCell(4); 
         
                var textoidrefa = document.createTextNode(rows[i].idcliente);
                var textoNombre= document.createTextNode(rows[i].nombreCliente);
                var textoIdAuto = document.createTextNode(rows[i].idautomovil);
                var textoEstado = document.createTextNode(rows[i].estado);
                var textoPlaca = document.createTextNode(rows[i].placa);
                celdaIdrefa.appendChild(textoidrefa);
                celdaNombre.appendChild(textoNombre);
                celdaIdAuto.appendChild(textoIdAuto); 
                celdaEstado.appendChild(textoEstado);
                celdaPlaca.appendChild(textoPlaca);
         }
        }
       
   
    }
}

) 
} 
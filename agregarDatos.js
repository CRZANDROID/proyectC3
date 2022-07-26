const conexion2 = require ('./conectar');
function cargarDatos() {
var nombre=document.getElementById("nombre").value;
var ape=document.getElementById("apellido").value;
var idauto=document.getElementById("idauto").value;
//console.log(nombre);
//console.log(ape);
$query = `INSERT INTO cliente (idcliente,nombre,apellido,automovil_idautomovil) VALUES (0,'${nombre}','${ape}','${idauto}')`;
conexion2.query($query, function (err, rows){
    if (err){
        console.log("error en el query");
        console.log(err);
        return;
    }
    console.log("ejecutado correctamente");

}
)

};

function consultarDatos(){
    var tablaR = document.getElementById("tabla");
    $query= 'select * from cliente ;';
conexion2.query($query, function (err, rows, fields){
    if (err){
        console.log("error en query");
        console.log(err);
        return;
    } else {
        console.log("ejecutado correctamente", rows);

        const long= rows.length;
        for (i=0; i<long; i++){
           // var cadena = rows [i].idcliente + " " + rows[i].nombre + " " + rows[i].apellido + " " + rows[i].automovil_idautomovil + "\n";
           var newRow = tablaR.insertRow(-1);
    
           var celdaId = newRow.insertCell(0);
           var celdaNombre = newRow.insertCell(1);
           var celdaApe = newRow.insertCell(2);
           var celdaIdAuto = newRow.insertCell(3);

    
           var textoid = document.createTextNode(rows[i].idcliente);
           var textoNombre= document.createTextNode(rows[i].nombre);
           var textoApe = document.createTextNode(rows[i].apellido);
           var textoIdauto = document.createTextNode(rows[i].automovil_idautomovil);
           celdaId.appendChild(textoid);
           celdaNombre.appendChild(textoNombre);
           celdaApe.appendChild(textoApe);
           celdaIdAuto.appendChild(textoIdauto);
    }
   
    }
}

)
}

function buscarDatos() {
    var busqueda = document.getElementById("buscar").value
    $query = `SELECT * FROM cliente WHERE nombre = '${busqueda}'`;
    var tablita = document.getElementById('tabla');
    conexion.query($query, function (err, rows, fields) {
        if (err) {
            console.log("Error en el query");
            console.log(err);
            return;
        }
        else {
            console.log("toodo bien", rows, fields)

            if (rows.length == 0) {
                alert("No hay nada")
            }
            else {
                var cadena = "";
                const long = rows.length;
                for (let i = 0; i < long; i++) {
                    const element = rows[i];
                    cadena += element.idcliente + " " + element.nombre + " " + element.ape + " " + element.automovil_idautomovil +"\n";
 
                    var newRow = tablita.insertRow(-1);

                    var celdaId = newRow.insertCell(0);
                    var celdaNombre = newRow.insertCell(1);
                    var celdaApe = newRow.insertCell(2);
                    var celdaIdauto = newRow.insertCell(3);

                    var TextId = document.createTextNode(element.idcliente);
                    var textNombre = document.createTextNode(element.nombre);
                    var textApe = document.createTextNode(element.apellido);
                    var textIdauto = document.createTextNode(element.automovil_idautomovil);

                    celdaId.appendChild(TextId);
                    celdaNombre.appendChild(textNombre);
                    celdaApe.appendChild(textApe);
                    celdaIdauto.appendChild(textIdauto);
                }
                console.log(cadena);

            }
        }

    })
}

const conexion2 = require ('./conectar');
function cargarDatos() {
var idauto=document.getElementById("idAuto").value;
var placa=document.getElementById("placa").value;
var tipoAuto=document.getElementById("tipo").value;
var estado=document.getElementById("estado").value;
var nombreCliente=document.getElementById("nombreCliente").value;
var apeCliente=document.getElementById("apeCliente").value;
var Idempleado=document.getElementById("idEmple").value;
var idCliente=document.getElementById("idCliente").value;
$query = `Insert into automovil (idautomovil,placa,tipo,estado,empleado_id_empleado) VALUES ('${idauto}','${placa}','${tipoAuto}','${estado}','${Idempleado}');`;
conexion2.query($query, function (err, rows){
    if (err){
        console.log("error en el query");
        console.log(err);
        return;
    }
    console.log("ejecutado correctamente");

}
)

$query = `INSERT INTO cliente (idcliente,nombreCliente,apellido,automovil_idautomovil) VALUES ('${idCliente}','${nombreCliente}','${apeCliente}','${idauto}');`;
conexion2.query($query, function (err, rows){
    if (err){
        alert("datos erroneos");
        console.log(err);
        return;
    }
    
    console.log("ejecutado correctamente");

}
)

};






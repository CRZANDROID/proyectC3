const conexion2 = require ('./conectar');

'use strict'
function agregarDatos(){
var id_admi = document.getElementById("id").value; 
var nombre=document.getElementById("nombre").value;
var password=document.getElementById("password").value;
var confirmPassword=document.getElementById("passwordConfirm").value;

if (confirmPassword==password) {
    $query = `INSERT INTO administrador (id_admi,nombre,passwords) VALUES ('${id_admi}','${nombre}','${password}')`;
conexion2.query($query, function (err, rows){
    if (err){
        console.log("error en el query");
        console.log(err);
        return;
    }
    console.log("ejecutado correctamente");
    
}
);
location.href="empleados.html"

} else {
    console.window("Las contrasena no son iguales");
}

}

function eliminarDatos(){
var nombre=document.getElementById("nombre").value;
$query = `DELETE  FROM administrador WHERE (nombre='${nombre}')`;
conexion2.query($query, function (err, rows){
    if (err){
        console.log("error en el query");
        console.log(err);
        return;
    }
    console.log("ejecutado correctamente");
    Location.href = "empleados.html"
}
);
}

function modificarDatos() {
    let id_admi = document.getElementById("id").value;
    let password = document.getElementById("password").value; 
    let passwordConfirm = document.getElementById("passwordConfirm").value;
    let user = document.getElementById("nombre_modificado").value;
    if (password==passwordConfirm) {
        $query = `UPDATE administrador SET nombre='${user}', passwords = '${password}' WHERE id_admi = '${id_admi}'`;
        conexion2.query($query, function (err, rows, fields) {
            if (err) {
                console.log("Error en el query");
                console.log(err);
                return;
            }
            else {
                console.log("todo bien", rows, fields)
    
            }
        }) ; location.href = "Empleados.html"
    } else {
        alert("Error: contrasenas distintas") ;
    }
   
}

function consultarAdmi(){
    var tablaR = document.getElementById("administrador");
    $query = `SELECT * FROM administrador`;
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


           var textoid = document.createTextNode(rows[i].id_admi);
           var textoNombre= document.createTextNode(rows[i].nombre);
           celdaId.appendChild(textoid);
           celdaNombre.appendChild(textoNombre);
           
    }
   
    }
}

)
} 
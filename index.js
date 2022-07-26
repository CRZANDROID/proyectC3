const {app, BrowserWindow} = require ('electron');

const conexion2 = require ('./conectar');

'use strict'
function agregarDatos(){
var nombre=document.getElementById("nombre").value;
var id_admi=document.getElementById("administrador").value;
var id=document.getElementById("id").value;
$query = `INSERT INTO empleado (id_empleado,nombre,administrador_id_admi) VALUES ('${id}','${nombre}','${id_admi}')`;
conexion2.query($query, function (err, rows){
    if (err){
        console.log("error en el query");
        console.log(err);
        return;
    }
    console.log("ejecutado correctamente");

}
);
    location.href = "empleados.html";
}

function eliminarDatos(){
var nombre=document.getElementById("nombre").value;
$query = `DELETE  FROM empleado WHERE (nombre='${nombre}')`;
conexion2.query($query, function (err, rows){
    if (err){
        console.log("error en el query");
        console.log(err);
        return;
    }
    console.log("ejecutado correctamente");

}
); location.href = "empleados.html";
}

function modificarDatos() {
    let id_empleado = document.getElementById("id").value;
    let id_admi = document.getElementById("admi").value; 
    let user = document.getElementById("nombre_modificado").value;
    $query = `UPDATE empleado SET nombre='${user}', administrador_id_admi = '${id_admi}' WHERE id_empleado = '${id_empleado}'`;
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
                location.href = "Empleados.html"
            }
        }
    })
}

function consultarDatos(){
    var tablaR = document.getElementById("empleado");
    $query = `SELECT * FROM empleado`;
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
           var celdaAdmi = newRow.insertCell(2);

    
           var textoid = document.createTextNode(rows[i].id_empleado);
           var textoNombre= document.createTextNode(rows[i].nombre);
           var textoAdmi = document.createTextNode(rows[i].administrador_id_admi);
           celdaId.appendChild(textoid);
           celdaNombre.appendChild(textoNombre);
           celdaAdmi.appendChild(textoAdmi);
    }
   
    }
}

)
} 
function consultarAdmi(){
    var tablaR = document.getElementById("admi");
    $query = `SELECT id_admi,nombre FROM administrador `;
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

app.on('ready',() => {
    let win= new BrowserWindow({
        webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
        }
    });
    win.loadFile('login.html')
    win.show()
    
    win.on('closed', () => {
        win = null;
        app.quit;
    });
});
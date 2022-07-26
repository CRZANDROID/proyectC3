const conexion2 = require('./conectar');


function agregarDatos() {
    var mes = document.getElementById("mes").value;
    var cantidad = document.getElementById("cantidad").value;

    $query = `INSERT INTO ventamensual (mes,cantidadVendida) VALUES ('${mes}','${cantidad}')`;
    conexion2.query($query, function (err, rows) {
      
     
        if (err) {
            console.log("error en el query");
            console.log(err);
            return;
        }
    
        console.log("ejecutado correctamente");
          
    }
    ); location.href = "ventas-mes.html";

}
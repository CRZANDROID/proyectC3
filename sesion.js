const listaUsuarios = new Array();
const conexion2 = require ('./conectar');

function validar(){ 
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;

    $query = `SELECT * FROM administrador WHERE nombre = '${user}' AND passwords = '${pass}'`;

    conexion2.query($query, function (err, rows, fields) {
        if (err) {
            console.log("Error en el query");
            console.log(err);
            return;
        }
        else {
            console.log("todo bien", rows, fields)

            if (rows.length == 0) {
                alert("Usuario o contrasena incorrectas")
            }
            else {
                location.href = "clientes.html"
            }
        }
    })
}
function main() {
  validar();
}

var mysql = require("mysql");
var conexion = mysql.createConnection({
  host: "db",
  database: "pweb_pizarra",
  user: "root",
  password: "pwdRoot",
});

conexion.connect(function (err) {
  if (err) {
    console.error("Error de conexion: " + err.stack);
    return;
  }
  console.log("Conectado con el identificador " + conexion.threadId);
});



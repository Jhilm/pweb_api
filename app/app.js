const express = require("express");

const app = express();
var mysql = require("mysql");

let cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const conn = mysql.createPool({
  host: "db",
  database: "pweb_pizarra",
  user: "root",
  password: "pwdRoot",
});

app.get("/", function (req, res) {
  res.send("Servidor de imagenes corriendo");
});

app.post("/saveImage", function (req, res) {
  var id = req.body.id;
  var name = req.body.name;
  var data = req.body.data;
  console.log("\n\n\n\n\n\n\n\nid: " + id, "name: " + name, "data: " + data);

  conn.query(
    "INSERT INTO images ( name, data) values (?,?)",
    [name, "'" + data + "'"],
    function (error, results) {
      if (error) throw error;
    }
  );
});

app.get("/getAllImages", async function (req, res) {
  let images = [];

  conn.query("SELECT * FROM images", function (error, results) {
    if (error) throw error;

    results.forEach((result) => {
      images.push(result);
    });
    res.send(images);
  });
});

app.listen(3000);

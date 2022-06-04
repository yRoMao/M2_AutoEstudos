
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3031;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'test.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static("../"));
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.post('/user', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM user ORDER BY id COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
  });
  

app.post('/insert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    sql = "INSERT INTO user (nome, idade) VALUES ('" + req.body.nome + "', " + req.body.idade + ")"
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [req.body.id, req.body.nome, req.body.idade],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	//res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE user SET nome = '" + req.body.nome + "' WHERE id = " + req.body.id;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/userdelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM user WHERE id =" + req.body.id;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});
  
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

const express = require('express'); 
const app = express();
const bodyParser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3031;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'test.db'; 
app.use(express.static('./index.html'));
app.use(express.json());
//app.set('view engine', 'pug')

//app.get('/', (req, res) => {
  //  res.render('../index.html')
//})

app.get('/a', (req, res) => {
res.statusCode = 200;
//res.setHeader('Content-Type', 'text/html');
res.setHeader('Access-Control-Allow-Origin', '*');
var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM user WHERE id = 1';
db.get(sql, [], (err, row) => {
    if (err) {
    throw err;
    }
    res.write("<h1> Teste do banco de dados</h1>") 
    res.write("<h2> Informacoes do usuario cujo id = 1: </h2>") 
    //res.write("title = " + row.title); 
    //res.write("<br />completed = " + row.completed); 
    //res.json(row);
});
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
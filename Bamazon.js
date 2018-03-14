

var mysql = require ('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port:3306,
  
  //username
  user:"root",
  
  // your password
  password: "root",
  database: "Bamazon"
});

connection.connect(function(err){
  if (err) throw err;
  console.log("connected as id " + connection.threadid);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM Products", function(err, res){
  // if (err throw err;
  console.log(res)
  connection.end();
  });
}

// not sre if this will be needed but
// var PORT =  ;

//EXAMPLE
// var PORT = 8080;
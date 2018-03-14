CREATE database Bamazon;

USE Bamazon;

CREATE TABLE Products (
	
    item_id INT NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,4) NULL,
	 stock_quantity INT NOT NULL,
	
	PRIMARY KEY (item_id)
);
	INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, 'Iphone', 'Tech', 199.00, 4);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, 'Action Figure', 'Toy', 29.99, 7);


    SELECT * FROM Products;
    
    



    var mysql = require ('mysql');

var connection = mysql.createconnection({
	host: "localhost"
	port:3306
	
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
	if (err throw err;
	console.log(res)
	connection.end();
	});
}

// not sre if this will be needed but
// var PORT =  ;

//EXAMPLE
// var PORT = 8080;
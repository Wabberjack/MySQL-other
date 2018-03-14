
var mysql      = require('mysql');
const inquirer = require("inquirer");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'MySQL-other'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});



connection.connect(function(err){
    var sql = "INSERT INTO MySQL-other (product_name, department_name, price, stock_quantity, item_id)";
    connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
      });

function start() {
  inquirer.prompt([
      {
        type: 'list',
        name: 'user1',
        message: 'What would you like to do?',
        choices: ["buy an item"]
      }   
  ]).then(function(response){
    if (response.user1 === "Buy an item") {
      inquirer.prompt([
      {
        type: 'input',
        name: 'itemname',
        message: 'Enter Item Name'
      },
      {
        type: 'input',
        name: 'price',
        message: 'Enter Item Price'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter Item Description'
      },
      {
        type: 'input',
        name: 'quantity',
        message: 'Enter Item quantity'
      }
        ]).then(function(database) {
          var query = connection.query(
            "INSERT INTO items SET ?",
            {
             item: database.itemname,
             description: database.description,
             quantity: database.quantity,
             price: database.price
            },
              function(err, res) {
                 console.log(err);
                console.log("Item Listed\n");
                return;
                // updateSong();
              }
            );
        });
    } else {
      var itemsArray = [];
      var query = connection.query ("SELECT item FROM items", function(err, res) {
        for (var i = 0; i < res.length; i++) {
          itemsArray = (res[i].item);
        }
      })
      // var myitems = itemsArray.toString()

        inquirer.prompt([
          {
            type: 'list',
            name: 'itemlist',
            message: 'Please choose an Item to bid On.',
            choices: [itemsArray.toString()]
          }

          ]).then(function(bid) {
            return;
          });


      return;
    }
  });

}
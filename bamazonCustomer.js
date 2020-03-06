var inquirer = require('inquirer');
var mySql = require("mysql");

var connection = mySql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "bamazon"
})


inquirer
  .prompt([
      {
        type: "list",
        name: "idCheck",
        message: "Which product (id) would you like to purchase?",
        choices: [1,2,3,4,5,6,7,8,9,10],
        default: 0
      },
      {
        type: "number",
        name: "quantity",
        message: "How many would you like to purchase?",
        default:1
      }
  ])
  .then(answers => {
    connection.connect(function(err){
        var tempQuant = 0;
        
    
        // if(err) throw err;
        connection.query("SELECT * FROM products WHERE id = ?", answers.idCheck, function(err, res){
            // if(err) throw err;
            // console.log(res);
            tempQuant = res[0].stock_quantity;
            console.log(tempQuant)
        })
        if(answers.quantity > tempQuant){
            connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE stock_quantity > ? AND id = ?", answers.quantity, answers.quantity, answers.idCheck, function(err, res){
                if(err) throw err;
                console.log(res);
            })
        } else {
            console.log("Sorry! There isn't enough quantity in stock.")
        }
        // connection.end();
    })
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
      console.log("Something else is wrong")
    }
  });
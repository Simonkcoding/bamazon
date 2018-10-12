var inquirer = require("inquirer");
var mysql = require("mysql");

//link to database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

//establish connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayItems();
});


var header = "|#||product_name||department_name||USD||stock|"
var divider = "\n ======================== \n";

//function displayItems
function displayItems() {
    console.log("Welcome to Simon's Bamazon. These are our specials!")

    var query = connection.query("Select * from products", function (err, res) {
        if (err) throw err;
        console.log("\n" + header + divider);
        for (var i = 0; i < res.length; i++) {
            console.log("|" + res[i].item_id + "||"
                + res[i].product_name + "||"
                + res[i].department_name + "||"
                + res[i].price + "||"
                + res[i].stock_quantity + "|")
        }
    })
    shoppingCart();
};

function shoppingCart() {
    console.log(divider + "Let me grab you a shopping cart!" + divider);
    inquirer
        .prompt([
            {
                name: "askItemId",
                message: "Please tell me the ID# of your favourite item",
            }, {
                name: "askQuantity",
                message: "How many do you want?"
            }
        ]).then(function (res) {
            var query = connection.query("Select * from products where item_id =?", [res.askItemId], function (err, result) {
                console.log("Summary of your order : " + res.askQuantity + " " + result[0].product_name);
                if (result[0].stock_quantity > res.askQuantity) {
                    var query = connection.query("update products set ? where ?",[
                        {
                            stock_quantity: result[0].stock_quantity - res.askQuantity
                        }, {
                            item_id : res.askItemId
                        }],function(){
                            console.log(divider+"Your order of "+  res.askQuantity + " " + result[0].product_name+" has been placed!"+divider)
                            decision() ;
                        })
                } else {
                    console.log(divider+"Sorry, it seems that we do not have enough "+ result[0].product_name
                    +". But we have other specials!"+divider);
                    decision() ;
                }
            })
        })
}

function decision(){
    inquirer
    .prompt([
        {
name:"wishToContinue",
message:"Do you want to continue shopping?",
type:"list",
choices:["YES","NO"]
        }
    ]).then(function(res){
        if (res.wishToContinue == "YES"){
            displayItems();
        } else {
            console.log("Thank you for shopping at Simon's bamazon");
            return;
        }
    })
}
# bamazon

1. introuction

This is an exercise merge node.js to MySQL server.
The program uses Inquirer as interaction with user:

![alt text](/img/overall.png)

2. Preparation

To run the program, the user need to set up a MySQL server using [MAMP](https://www.mamp.info/en/) and [MySQL](https://www.mysql.com/). The configuration of server should match with the connection information in the js files.

2. bamazonCustomer

Simply type "node bamazonCustomer.js" in the terminal when the path is directing to the folder.

Follow the inquirer prompt and the item will be subtracted from database. Insufficent warning will appear if the stock is not enough. Continue message will be asked no matter successful or not.

![alt text](/img/continue.png)

3.bamazonManager

Type "node bamazonManager.js" . There are 4 selections which allow user to :

![alt text](/img/manager.png)

* View Products for Sale, just like customer.  
* View Low Inventory

![alt text](/img/lowInv.png)

* Add to Inventory

![alt text](/img/addInv.png)

* Add New Product

![alt text](/img/addprod.png)

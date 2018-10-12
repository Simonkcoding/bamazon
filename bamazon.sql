drop database if exists bamazonDB;
create database bamazonDB;
use bamazonDB;

create table products(
item_id int(10) auto_increment,
primary key (item_id),
product_name varchar(30) not null,
department_name varchar(30),
price dec(10,3) not null,
stock_quantity int(10) not null
);


insert into products (product_name,department_name,price,stock_quantity) 
values ("simon's underpant","apparel",100, 10);

insert into products (product_name,department_name,price,stock_quantity) 
values ("Gucci handbag","apparel",20, 10);

insert into products (product_name,department_name,price,stock_quantity) 
values ("CK boxer","apparel",10, 10);

insert into products (product_name,department_name,price,stock_quantity) 
values ("Iphone","electronics",100, 10);

insert into products (product_name,department_name,price,stock_quantity) 
values ("Playstation","toys",100, 10);

insert into products (product_name,department_name,price,stock_quantity) 
values ("Human flesh","grocery",50, 10);

insert into products (product_name,department_name,price,stock_quantity) 
values ("Human organs","grocery",50, 10);
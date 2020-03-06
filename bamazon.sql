### Schema

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
	id int NOT NULL AUTO_INCREMENT,
	product_name varchar(255) NOT NULL,
    department_name varchar(255) NOT NULL,
    price int NOT NULL,
    stock_quantity int NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Animal Crossing', "Toys & Games", 60, 900);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Super Smash Bros Ultimate', "Toys & Games", 60, 450);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Redken Molding Paste', "Beauty & Personal Care", 13, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Baby Wipes', "Baby", 60, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Stainless Steel Knife', "Kitchen", 120, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Non-Stick Pot', "Kitchen", 45, 450);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Dog Food', "Pet Supplies", 20, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Cat Food', "Pet Supplies", 20, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Batman Costume', "Clothing, Shoes, & Jewelry", 60, 900);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Black Shirt', "Clothing, Shoes, & Jewelry", 60, 900);


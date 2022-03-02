import mysql from 'mysql2';
import 'dotenv/config';
import products from './data/products.js';
import db from './config/db.js';
import Product from './models/Product.js';

const importData = async () => {
	try {
		let sql =
			'INSERT INTO products (name, description ,price ,countInStock ,imageUrl)  VALUES ?';
		const values = products;
		const results = await db.query(sql, [values]);
		log(results);
	} catch (err) {
		console.log(err);
	}
	// const values = products;
	// let sql =
	// 	'INSERT INTO products (name, description ,price ,countInStock ,imageUrl)  VALUES ?';
	// db.query(sql, [values], function (err, result) {
	// 	if (err) throw err;
	// 	console.log(result);
	// });
};

importData();

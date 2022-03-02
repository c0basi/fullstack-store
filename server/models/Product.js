import db from '../config/db.js';

class Product {
	name;
	description;
	price;
	countInStock;
	imageUrl;
	constructor(name, description, price, countInStock, imageUrl) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.countInStock = countInStock;
		this.imageUrl = imageUrl;
	}

	static fetchAll() {
		let sql = ' SELECT * FROM products';
		return db.execute(sql);
	}

	static findByID(id) {
		let sql = 'SELECT * FROM products WHERE id=(?)';
		return db.execute(sql, [id]);
	}
}

export default Product;

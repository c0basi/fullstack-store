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
}

export default Product;

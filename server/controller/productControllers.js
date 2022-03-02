import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
	try {
		const [products, _] = await Product.fetchAll();
		res.json(products);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Server Error' });
	}
};

export const getProductById = async (req, res) => {
	try {
		const id = req.params.id;
		const [product, _] = await Product.findByID(id);
		res.json(product);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Server Error' });
	}
};

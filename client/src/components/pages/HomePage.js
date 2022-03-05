import './HomePage.scss';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Product';
import { getProducts as listProducts } from '../../redux/product-actions';

const HomePage = () => {
	const dispatch = useDispatch();
	const getProducts = useSelector((state) => state.products);
	const { products, loading, error } = getProducts;

	// find a way to di that
	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div className="homepage">
			<h2 className="homepage__title">Latest Products</h2>
			<div className="homepage__products">
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2>{error}</h2>
				) : (
					products.map((product) => (
						<Product
							key={product.id}
							id={product.id}
							name={product.name}
							price={product.price}
							description={product.description}
							countInStock={product.countInStock}
							imageUrl={product.imageUrl}
						/>
					))
				)}
				{/* <Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product /> */}
			</div>
		</div>
	);
};

export default HomePage;

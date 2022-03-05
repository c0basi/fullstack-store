import './HomePage.scss';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Product';
import { getProducts as listProducts } from '../../redux/product-actions';

const HomePage = () => {
	const dispatch = useDispatch();
	const getProducts = useSelector((state) => state.products);
	const { products, loading, error } = getProducts;

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
					products.map((product) => <Product />)
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

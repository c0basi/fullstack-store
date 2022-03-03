import './HomePage.scss';
import Product from '../Product';
const HomePage = () => {
	return (
		<div className="homepage">
			<h2 className="homepage__title">Latest Products</h2>
			<div className="homepage__products">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
};

export default HomePage;

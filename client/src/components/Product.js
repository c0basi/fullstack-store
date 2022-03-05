import './Product.scss';
import { Link } from 'react-router-dom';
const Product = ({ id, name, price, description, countInStock, imageUrl }) => {
	return (
		<div className="product">
			<img src={imageUrl} alt={name} />
			<div className="product__info">
				<p className="product__info--name">{name}</p>
				<p className="product__info--description">
					{description.substring(0, 100)}...
				</p>
				<p className="product__info--price">${price}</p>
				<Link to={`/product/${id}`} className="info-button">
					View
				</Link>
			</div>
		</div>
	);
};

export default Product;

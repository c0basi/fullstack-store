import './ProductPage.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductPage = () => {
	const dispatch = useDispatch();
	return (
		<div className="productpage">
			<div className="productpage__left">
				<div className="productpage__left--image">
					<img
						src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
						alt="product name"
					/>
				</div>
				<div className="productpage__left--info">
					<p className="productpage__left--info__name">Product 1</p>
					<p className="productpage__left--info__price">Price: $49.99</p>
					<p className="productpage__left--info__description">
						Description: Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Adipisci, possimus eaque. Mollitia nulla reiciendis unde odit
						eveniet illum atque ab suscipit quisquam illo? Porro deleniti quam
						pariatur. In, vero natus.
					</p>
				</div>
			</div>
			<div className="productpage__right">
				<div className="productpage__right__info">
					<p>
						Price: <span>$499.99</span>
					</p>
					<p>
						Status: <span>In stock</span>
					</p>
					<p>
						Qty
						<select>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</p>
					<p>
						<button type="button">Add to Cart</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;

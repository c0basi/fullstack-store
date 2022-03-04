import './CartPage.scss';
import CartItem from '../CartItem';

const CartPage = () => {
	return (
		<div className="cartpage">
			<div className="cartpage__left">
				<h2>Shopping Cart</h2>

				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
			</div>
			<div className="cartpage__right">
				<div className="cartpage__right--info">
					<p>Subtotal (0) items</p>
					<p>$499.00</p>
				</div>
				<div>
					<p>
						<button>Proceed To Checkout</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CartPage;

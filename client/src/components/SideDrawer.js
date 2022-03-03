import './SideDrawer.scss';
import { Link } from 'react-router-dom';

const SideDrawer = ({ show, click }) => {
	const sideDrawerClass = `sidedrawer ${show ? 'show' : ''}`;
	return (
		<div className={sideDrawerClass}>
			<ul className="sidedrawer__links" onClick={click}>
				<li>
					<Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
						<span>Cart</span>
						<span className="sidedrawer__links--cartbadge">0</span>
					</Link>
				</li>
				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;

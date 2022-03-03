import './NavBar.scss';
import { Route, Routes, Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<nav className="navbar">
			{/* logo */}
			<div className="navbar__logo">
				<h2>MERN Shopping Cart</h2>
			</div>

			{/* links */}
			<ul className="navbar__links">
				<li>
					<Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
						Cart
						<span className="cartlogo__badge">0</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						Shop
						<span className="cartlogo__badge">1</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;

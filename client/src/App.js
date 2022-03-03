import './App.scss';
import Layout from './components/Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';

//pages
import HomePage from './components/pages/HomePage';
import CartPage from './components/pages/HomePage';
import ProductPage from './components/pages/HomePage';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/product/:id" element={<CartPage />} />
				<Route path="/cart" element={<ProductPage />} />
			</Routes>
		</Layout>
	);
}

export default App;

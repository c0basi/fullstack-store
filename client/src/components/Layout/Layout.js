import { Fragment, useState } from 'react';
import NavBar from '../NavBar';
import Backdrop from '../Backdrop';
import SideDrawer from '../SideDrawer';

const Layout = (props) => {
	const [sideToggle, setSideToggle] = useState(false);

	const toggleHandler = () => {
		setSideToggle(true);
	};

	const removeToggleHandler = () => {
		setSideToggle(false);
	};
	return (
		<Fragment>
			<NavBar click={toggleHandler} />
			<Backdrop show={sideToggle} click={removeToggleHandler} />
			<SideDrawer show={sideToggle} click={removeToggleHandler} />
			<main>{props.children}</main>
		</Fragment>
	);
};

export default Layout;

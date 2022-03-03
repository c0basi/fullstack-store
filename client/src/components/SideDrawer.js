import './SideDrawer.scss';

const SideDrawer = ({ show }) => {
	const sideDrawerClass = `sidedrawer ${show ? 'show' : ''}`;
	return <div className={sideDrawerClass}></div>;
};

export default SideDrawer;

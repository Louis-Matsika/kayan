import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<header>
				<a
					href="/"
					class="header-logo-wrapper"
				>
					<img
						src="site-content/omologo-white.png"
						alt="OMO logo"
						class="header-logo omo-logo"
					/>
				</a>
			</header>

			<Outlet />
		</>
	);
};

export default Layout;

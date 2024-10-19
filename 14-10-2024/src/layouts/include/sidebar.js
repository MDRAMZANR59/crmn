import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Sidebar() {

	const activeMenu = (e) => {
		document.querySelectorAll('.submenu').forEach(
			function (e) {
				e.classList.remove('active');
			}
		)
		const childElement = e.target.parentElement.querySelector('.submenu');
		if (childElement && childElement.classList.contains('submenu')) {
			childElement.classList.add('active');
		}
	}

	const location = useLocation();
	const isLinkActive = (path) => {
		return location.pathname == path ? 'active' : "";
	}
	return (
		<nav className="sidebar sidebar-offcanvas" id="sidebar">
			<ul className="nav">
				<li className="nav-item nav-profile">
					<div className="nav-link">
						<div className="profile-image">
							<img src="/assets_admin/images/faces/face5.jpg" alt="image" />
						</div>
						<div className="profile-name">
							<p className="name">
								Welcome FAHIM
							</p>
							<p className="designation">
								Super Admin
							</p>
						</div>
					</div>
				</li>
				<li className="nav-item">
					<Link to={"/"} className="nav-link" >
						<i className="fa fa-home menu-icon"></i>
						<span className="menu-title">Dashboard</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to={"/customer"} className="nav-link" >
						<i className="fa fa-user menu-icon"></i>
						<span className="menu-title">Customer</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to={"/package"} className="nav-link" >
						<i className="fa fa-tree menu-icon"></i>
						<span className="menu-title">Package</span>
					</Link>
				</li>


				<li className="nav-item">
					<Link to={"/hotel"} className="nav-link" >
						<i className="fa fa-building menu-icon"></i>
						<span className="menu-title">Hotel</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to={"/flight"} className="nav-link" >
						<i className="fa fa-plane menu-icon"></i>
						<span className="menu-title">Flight</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to={"/transport"} className="nav-link" >
						<i className="fa fa-car menu-icon"></i>
						<span className="menu-title">Transport</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to={"/subscription"} className="nav-link" >
						<i className="fa fa-user menu-icon"></i>
						<span className="menu-title">Subscription</span>
					</Link>
				</li>

				<li className="nav-item">
					<i className="fa fa-info-circle menu-icon"></i>
					<span className="menu-title"> ---- All Information</span>
				</li>

				<li className="nav-item">
					<Link to={"/catagory"} className="nav-link" >
						<i className="fa fa-home menu-icon"></i>
						<span className="menu-title">Catagory</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to={"/country"} className="nav-link" >
						<i className="fa fa-home menu-icon"></i>
						<span className="menu-title">Country</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to={"/state"} className="nav-link" >
						<i className="fa fa-home menu-icon"></i>
						<span className="menu-title">State</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to={"/zone"} className="nav-link" >
						<i className="fa fa-home menu-icon"></i>
						<span className="menu-title">Zone</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to={"/roomtype"} className="nav-link" >
						<i className="fa fa-home menu-icon"></i>
						<span className="menu-title">Roomtype</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to={"/airline"} className="nav-link" >
						<i className="fa fa-home menu-icon"></i>
						<span className="menu-title">Airline</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to={"/vehicle"} className="nav-link" >
						<i className="fa fa-home menu-icon"></i>
						<span className="menu-title">Vehicle</span>
					</Link>
				</li>
			</ul>
		</nav>



	)
}
export default Sidebar
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    // State to track open menus
    const [openMenu, setOpenMenu] = useState(null);

    // Hook to get the current path location
    const location = useLocation();

    // Function to handle menu click
    const handleMenuClick = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    // Function to check if the link is active
    const isLinkActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                {/* Sidebar */}
                <div className="sidebar">
                    
                    {/* Sidebar User Panel */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>

                    {/* Sidebar Search Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            
                            {/* Dashboard Section */}
                            <li className={`nav-item ${openMenu === 'dashboard' ? 'menu-open' : ''}`}>
                                <a href="#" className="nav-link" onClick={() => handleMenuClick('dashboard')}>
                                <li className={`nav-item ${isLinkActive('/')}`}>
                                        <Link to="/" className="nav-link active">
                                            <i class="nav-icon fas fa-tachometer-alt"></i>
                                            <p>Dashboard</p>
                                        </Link>
                                    </li>
                                </a>
                            </li>

                            {/* User Section */}
                            <li className={`nav-item ${openMenu === 'user' ? 'menu-open' : ''}`}>
                                <a href="#" className="nav-link" onClick={() => handleMenuClick('user')}>
                                    <i className="nav-icon fas fa-user"></i>
                                    <p>
                                        User
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add User</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>User List</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Mail Section */}
                            <li className={`nav-item ${openMenu === 'mail' ? 'menu-open' : ''}`}>
                                <a href="#" className="nav-link" onClick={() => handleMenuClick('mail')}>
                                    <i className="nav-icon fas fa-envelope"></i>
                                    <p>
                                        Mail
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Inbox</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Suggestion</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Complain</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Staff Section */}
                            <li className={`nav-item ${openMenu === 'staff' ? 'menu-open' : ''}`}>
                                <a href="#" className="nav-link" onClick={() => handleMenuClick('staff')}>
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>
                                        Staff
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add Staff</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Staff List</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Warning Staff</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Services Section */}
                            <li className="nav-header">Service</li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="fas fa-circle nav-icon"></i>
                                    <p>Service Add</p>
                                </a>
                            </li>
                            <li className={`nav-item ${openMenu === 'serviceList' ? 'menu-open' : ''}`}>
                                <a href="#" className="nav-link" onClick={() => handleMenuClick('serviceList')}>
                                    <i className="nav-icon fas fa-circle"></i>
                                    <p>
                                        Service List
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Web Application Development</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Android App Development</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>PC App Development</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Customer List Section */}
                            <li className="nav-header">Customer List</li>
                            <li className={`nav-item ${openMenu === 'customerList' ? 'menu-open' : ''}`}>
                                <a href="#" className="nav-link" onClick={() => handleMenuClick('customerList')}>
                                    <i className="nav-icon fas fa-copy"></i>
                                    <p>
                                        Proposal
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Canceled Proposal</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Accepted Proposal</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Income Section */}
                            <li className={`nav-item ${openMenu === 'income' ? 'menu-open' : ''}`}>
                                <a href="#" className="nav-link" onClick={() => handleMenuClick('income')}>
                                    <i className="nav-icon fas fa-copy"></i>
                                    <p>
                                        Income
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Daily Income</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Capital Income</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Report Section */}
                            <li className={`nav-item ${openMenu === 'report' ? 'menu-open' : ''}`}>
                                <a href="#" className="nav-link" onClick={() => handleMenuClick('report')}>
                                    <i className="nav-icon fas fa-copy"></i>
                                    <p>
                                        Report
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Income Report</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Expenses Report</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Support Section */}
                            <li className="nav-header">Support</li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;

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
   
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };

    return (
        <>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="javascript:void(0)" className="brand-link">
                    <img src="../assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light"> Code Crafters</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar User Panel */}
                    <div className="dropdown">
                        <div className="user-panel mt-3 pb-3">
                            <div id="dropdownMenuButton" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isOpen}>
                                <div className="user-panel d-flex">
                                    <div className="image">
                                        <img src="../../assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
                                    </div>
                                    <div className="info">
                                        <a href="#" className="d-block">Alexander Pierce</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`dropdown-menu ms-3 me-2 top-2 w-50 text-center bg-primary bg-gradient ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                            <Link to="/user/userProfile" className="dropdown-item text-dark">Profile</Link>
                            <a className="dropdown-item text-dark" href="#action2">Log Out</a>
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
                                <a href="javascript:void(0)" className="nav-link" onClick={() => handleMenuClick('dashboard')}>
                                <li className={`nav-item ${isLinkActive('/')}`}>
                                        <Link to="/" className="nav-link active">
                                            <i className="nav-icon fas fa-tachometer-alt"></i>
                                            <p>Dashboard</p>
                                        </Link>
                                    </li>
                                </a>
                            </li>
                            {/* User Section */}
                            <li className={`nav-item ${openMenu === 'user' ? 'menu-open' : ''}`}>
                                <a href="javascript:void(0)" className="nav-link" onClick={() => handleMenuClick('user')}>
                                    <i className="nav-icon fas fa-user"></i>
                                    <p>User
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/makeSecondaryUser" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Make Secondary User</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/user/userList" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>User List</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={`nav-item ${openMenu === 'customer' ? 'menu-open' : ''}`}>
                                <a href="javascript:void(0)" className="nav-link" onClick={() => handleMenuClick('customer')}>
                                    <i className="nav-icon fas fa-restroom"></i>
                                    <p>
                                    Customer's
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    {/* <li className="nav-item">
                                        <Link to="/customer/customerAdd" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Customer Add</p>
                                        </Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link to="/customer/customerList" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Customer List</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                             {/* Staff Section */}
                             <li className={`nav-item ${openMenu === 'staff' ? 'menu-open' : ''}`}>
                                <a href="javascript:void(0)" className="nav-link" onClick={() => handleMenuClick('staff')}>
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>
                                        Staff
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/staff/staffAdd" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add Staff</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/staff/staffList' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Staff List</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/staff/warningStaffList' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Warning Staff</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Services Section */}
                             {/* Project Section */}
                             <li className={`nav-item ${openMenu === 'project' ? 'menu-open' : ''}`}>
                                <a href="javascript:void(0)" className="nav-link" onClick={() => handleMenuClick('project')}>
                                    <i className="nav-icon fas fa-folder"></i>
                                    <p>
                                        Project
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/project/projectAdd" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add Project</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/project/projectList' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Project Files</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/project/TransfaringProject' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Transfaring Project</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/project/CancalingProject' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Cancaling Project</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Project Section */}
                            {/* Mail Section */}
                            <li className={`nav-item ${openMenu === 'mail' ? 'menu-open' : ''}`}>
                                <a href="javascript:void(0)" className="nav-link" onClick={() => handleMenuClick('mail')}>
                                    <i className="nav-icon fas fa-envelope"></i>
                                    <p>
                                        Mail
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/mail/mailBox" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Mail Box</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/mail/mailbox/ComSug" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Complain/Suggestion</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-header">Service</li>
                            <li className="nav-item">
                                <a href="javascript:void(0)" className="nav-link">
                                    <i className="fas fa-circle nav-icon"></i>
                                    <Link to='/service/serviceAdd'>Service Add</Link>
                                </a>
                            </li>
                            <li className={`nav-item ${openMenu === 'serviceList' ? 'menu-open' : ''}`}>
                                <a href="javascript:void(0)" className="nav-link" onClick={() => handleMenuClick('serviceList')}>
                                    <i className="nav-icon fas fa-circle"></i>
                                    <p>
                                        Service List
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/service/serviceList/AndroidAppDevolopment' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Android App Development</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/service/serviceList/WebAppDevolopment' href="javascript:void(0)" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Web Application Development</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/service/serviceList/PcAppDevolopment' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>PC App Development</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Income Section */}
                            <li className={`nav-item ${openMenu === 'income' ? 'menu-open' : ''}`}>
                                <a href="javascript:void(0)" className="nav-link" onClick={() => handleMenuClick('income')}>
                                    <i className="nav-icon fas fa-copy"></i>
                                    <p>
                                        Income
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/income/DailyIncome' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Input Daily Income</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Income Section */}
                            <li className={`nav-item ${openMenu === 'expense' ? 'menu-open' : ''}`}>
                                <a href="javascript:void(0)" className="nav-link" onClick={() => handleMenuClick('expense')}>
                                    <i className="nav-icon fas fa-copy"></i>
                                    <p>
                                    Expense
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/expense/DailyExpense' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Input Daily expense</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/expense/CapitalOut' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Capital Out</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Report Section */}
                            <li className={`nav-item ${openMenu === 'report' ? 'menu-open' : ''}`}>
                                <a href="javascript:void(0)" className="nav-link" onClick={() => handleMenuClick('report')}>
                                    <i className="nav-icon fas fa-copy"></i>
                                    <p>
                                        Report
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/report/IncomeReport' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Income Report</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/report/ExpensesReport' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Expenses Report</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/report/CashTransfer' className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Blance Transfer Report</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;

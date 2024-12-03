import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../Api/AllApi';


function Sidebar() {
    const user_role=localStorage.getItem("user_role");
    //get user data
    let userdata = localStorage.getItem("userdata");

    // Check if 'userdata' is a string before parsing, otherwise use it as is
    let parsedUserData = null;
    try {
        parsedUserData = userdata ? JSON.parse(userdata) : null;
    } catch (e) {
        // If it's already an object (or the string is malformed), handle the error gracefully
        console.error("Error parsing userdata:", e);
        parsedUserData = userdata;
    }
    //close get user data

    const [openMenu, setOpenMenu] = useState(null);

    const location = useLocation();

    const handleMenuClick = (menu) => {
        console.log(menu)
        // setOpenMenu(openMenu === menu ? null : menu);
         setOpenMenu(menu);
    };

    const isLinkActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };
   
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
        const handleLogout = async () => {
            await logout();
            window.location.href = "/login";
        };
    
    
    const nav=[
            {
                role:[1,2,3,4],
                name:'Dashboard',
                link:'',
                link_text:'dashboard',
                icon:'nav-icon fas fa-tachometer-alt',
                sub:[]
            },
            {
                role:[1,2],
                name:'User',
                link:'',
                link_text:'user',
                icon:'nav-icon fas fa-user',
                sub:[
                    {
                        role:[1,2],
                        name:'Add User',
                        link:'user/addUser',
                        link_text:'user',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    },
                    {
                        role:[1,2],
                        name:'User List',
                        link:'user/userList',
                        link_text:'user',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    }
                ]
            },
            {
                role:[1,2,3],
                name:'Customer Note',
                link:'',
                link_text:'customerNote',
                icon:'nav-icon fas fa-sticky-note',
                sub:[
                    {
                        role:[1,2,3,],
                        name:'Customer Note Add',
                        link:'customerNote/addNote',
                        icon:'far fa-circle nav-icon',
                        link_text:'customerNote',
                        sub:[]
                    },
                    {
                        role:[1,2],
                        name:'Note List',
                        link:'customerNote/noteList',
                        link_text:'customerNote',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    }
                ]
            },
            {
                role:[1,3],
                name:"Customer's",
                link:'',
                link_text:'customer',
                icon:'nav-icon fas fa-restroom',
                sub:[
                    {
                        role:[1,2,3],
                        name:'Customer Add',
                        link:'customer/customerAdd',
                        link_text:'customer',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    },
                    {
                        role:[1,2,],
                        name:'Customer List',
                        link:'customer/customerList',
                        link_text:'customer',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    }
                ]
            },
            {
                role:[1,2,3,4],
                name:"Project",
                link:'',
                link_text:'project',
                icon:'nav-icon fas fa-folder',
                sub:[
                    {
                        role:[1,2,],
                        name:'Add Project',
                        link:'project/projectAdd',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    },
                    {
                        role:[1,2,3,4],
                        name:'Project Files',
                        link:'project/projectList',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    },
                    {
                        role:[1,2],
                        name:'Delivery Project',
                        link:'project/DeliveryProject',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    },
                    {
                        role:[1,2],
                        name:'Cancaled Project',
                        link:'project/CancalingProject',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    },
                ]
                
            },
            {
                role:[1,2,3,4],
                name:"Mail",
                link:'',
                link_text:'mail',
                icon:'nav-icon fas fa-envelope',
                sub:[
                    {
                        role:[1,2,3,4],
                        name:'Mail Box',
                        link:'mail/mailBox',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    },
                ]
            },
            {
                role:[1,2,3],
                name:"Service Add",
                link:'service/serviceAdd',
                icon:'fas fa-circle nav-icon',
                link_text:'serviceAdd',
                sub:[]
            },
            {
                role:[1,2,3,4],
                name:"Service List",
                link:'',
                link_text:'serviceList',
                icon:'nav-icon fas fa-envelope',
                sub:[
                    {
                        role:[1,2,3,4],
                        name:'Android App Development',
                        link:'service/serviceList/AndroidAppDevolopment',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    },
                    {
                        role:[1,2,3,4],
                        name:'Web Application Development',
                        link:'service/serviceList/WebAppDevolopment',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    },
                    {
                        role:[1,2,3,4],
                        name:'PC App Development',
                        link:'service/serviceList/PcAppDevolopment',
                        icon:'far fa-circle nav-icon',
                        sub:[]
                    }
                    
                ]
            },
   
        ]

    return (
        <>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="javascript:void(0)" className="brand-link">
                    <img src="../assets/dist/img/logo.jpg" alt="Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
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
                                        <img src={`http://127.0.0.1:8000/adduser/${parsedUserData.photo}`} className="img-circle elevation-2" alt="User Image"/>
                                    </div>
                                    <div className="info">
                                        <a href="#" className="d-block">{parsedUserData ? `Hi, ${parsedUserData.name}` : ''}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`dropdown-menu ms-3 me-2 top-2 w-50 text-center bg-primary bg-gradient ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                            <Link to="/user/userProfile" className="dropdown-item text-dark">Profile</Link>
                            <button onClick={handleLogout} className="dropdown-item text-white">Logout</button>
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
                            {nav && nav.map((d, key) =>
                                <>
                                {d.role.find((element) => element == user_role) && 
                                    <>
                                        {
                                            d.sub.length <= 0 ? 
                                                        <li className={`nav-item ${openMenu === d.link_text ? 'menu-open' : ''}`}>
                                                            <a href="javascript:void(0)" className="nav-link" onClick={() => handleMenuClick(d.link_text)}>
                                                            <li className={`nav-item ${isLinkActive('/'+d.link)}`}>
                                                                    <Link to={`/${d.link}`} className={`nav-link ggg ${openMenu} ${openMenu === d.link_text ? 'active' : ''}`}>
                                                                        <i className={`${d.icon}`}></i>
                                                                        <p>{d.name}</p>
                                                                    </Link>
                                                                </li>
                                                            </a>
                                                        </li>
                                            :
                                            
                                            <li className={`nav-item ${openMenu === d.link_text ? 'menu-open' : ''}`}>
                                                <a href="javascript:void(0)" className={`nav-link ${openMenu} ${openMenu === d.link_text ? 'active' : ''}`} onClick={() => handleMenuClick(d.link_text)}>
                                                    <i className={`${d.icon}`}></i>
                                                    <p>{d.name}
                                                        <i className="fas fa-angle-left right"></i>
                                                    </p>
                                                </a>
                                                <ul className="nav nav-treeview">
                                                    {d.sub && d.sub.map((sd, skey) =>
                                                        <>
                                                            {sd.role.find((e) => e == user_role) && 
                                                                <li className="nav-item">
                                                                    <Link to={`/${sd.link}`} className="nav-link">
                                                                        <i className="far fa-circle nav-icon"></i>
                                                                        <p>{sd.name}</p>
                                                                    </Link>
                                                                </li>
                                                            }
                                                        </>
                                                    )}
                                                </ul>
                                            </li>
                                        }
                                        
                                    </>
                                    
                                }
                                </>
                            )}
                           
                            {/* User Section */}
                            {/* {user_role==1 &&  */}
                                
                            {/* } */}
                            {/* {user_role==1 || user_role==2 || user_role==3 &&  */}
                                
                            {/* } */}
                            
                     
                            {/* Project Section */}
                            {/* Mail Section */}
                          
                            {/* Report Section */}
                            {/* <li className={`nav-item ${openMenu === 'report' ? 'menu-open' : ''}`}>
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
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;

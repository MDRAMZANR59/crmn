import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function User() {
    
  return (
    <AdminLayout>
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Add New User</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">User</a></li>
                  <li className="breadcrumb-item active">Add</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div class="card card-default">
                <div class="card-header">
                    <h3 class="card-title">User form</h3>
                </div>
                <div class="card-body">
                    <div className="container mt-1">
                        <table className='table table-responsive table-sm text-nowrap text-center'>
                            <thead>
                                <tr>
                                    <th>#SL</th>
                                    <th>Name</th>
                                    <th>NID</th>
                                    <th>DOB</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Employe Id</th>
                                    <th>Dasignation</th>
                                    <th>Photo</th>
                                    <th>Signature</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Md Kamal Uddin</td>
                                    <td>710 720 5554</td>
                                    <td>14/04/1997</td>
                                    <td>kamal@gmail.com</td>
                                    <td>+880 1559 075 906</td>
                                    <td>103</td>
                                    <td>CEO</td>
                                    <td><img width="200px" src="../../layouts/assets/dist/img/avatar.png"/></td>
                                    <td><img width="200px" src="../../"/></td>
                                    <td><span>Pathan Para</span><span>Oxizyn</span><span>4500</span><span>Bayejid</span><span>Chittagong</span><span>+880</span></td>
                                    <td>
                                        <a className='btn btn-info' href='#'>Edit</a>
                                        <a className='btn btn-danger' href='#'>Delete</a>
                                        <a className='btn btn-primary' href='#'>Mail</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        </section>
    </div>
    </AdminLayout>       
  )
}

export default User

{/* <li className={`nav-item ${openMenu==='report' ? 'menu-open' : ''}`}>
<a href="#" className="nav-link" onClick={()=> handleMenuClick('report')}>
  <i className="nav-icon fas fa-circle"></i>
  <p>
    Report
    <i className="right fas fa-angle-left"></i>
  </p>
</a>
<ul className="nav nav-treeview">
  <li className="nav-item">
    <a href="#" className="nav-link">
      <i className="far fa-circle nav-icon"></i>
      <p>New</p>
    </a>
  </li>
  <li className="nav-item">
    <a href="#" className="nav-link">
      <i className="far fa-circle nav-icon"></i>
      <p>Old</p>
    </a>
  </li>
</ul>
</li>
                    </ul>
                </li> */}
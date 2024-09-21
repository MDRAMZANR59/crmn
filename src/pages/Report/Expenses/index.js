import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout'

function ExpensesReport() {
    
  return (
    <AdminLayout>
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Customer List</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Customer</a></li>
                  <li className="breadcrumb-item active">List</li>
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
                    <h3 class="card-title">Customer Form</h3>
                </div>
                <div class="card-body">
                    <div className="container mt-5">
                        <table className='table table-responsive'>
                            <thead>
                                <tr>
                                    <th>#SL</th>
                                    <th>Frist Name</th>
                                    <th>Last Name</th>
                                    <th>User Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Project Reg No</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Md Kamal</td>
                                    <td>Uddin</td>
                                    <td>Kamal</td>
                                    <td>+880 1559 075 906</td>
                                    <td>kamal@gmail.com</td>
                                    <td>
                                      <div className="container mt-1"><div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="customSwitch1" /><label className="custom-control-label" htmlFor="customSwitch1">Active</label></div></div>
                                    </td>
                                    <td>04</td>
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

export default ExpensesReport
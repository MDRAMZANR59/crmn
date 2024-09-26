import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdminLayout from '../../../layouts/AdminLayout'

function StaffList() {
    
  return (
    <AdminLayout>
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Staff List</h1>
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
                        <table className='table table-responsive text-nowrap text-center '>
                            <thead>
                                <tr>
                                    <th>#SL</th>
                                    <th>Name</th>
                                    <th>DOB</th>
                                    <th>NID</th>
                                    <th>Phone</th>
                                    <th>Employe Id</th>
                                    <th>Joining Date</th>
                                    <th>Designation</th>
                                    <th>Email</th>
                                    <th>Photo</th>
                                    <th>Signature</th>
                                    <th>Status</th>
                                    <th>New Project/Type</th>
                                    <th>Running Project</th>
                                    <th>Action</th>
                                    <th>Project Reg No</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Md Kamal</td>
                                    <td>15/12/1994</td>
                                    <td>2257956472</td>
                                    <td>+880 1559 075 906</td>
                                    <td>203</td>
                                    <td>16/01/2024</td>
                                    <td>Senior Software Devoloper</td>
                                    <td>kamal@gmail.com</td>
                                    <td><img width="200px" src="../../layouts/assets/dist/img/avatar.png"/></td>
                                    <td><img width="200px" src="../../"/></td>
                                    <td>
                                      <div className="container mt-1"><div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="customSwitch1" /><label className="custom-control-label" htmlFor="customSwitch1">Active</label></div></div>
                                    </td>
                                    <td><span>BDIX Taster</span><span>Mobile App Development</span></td>
                                    <td><span>BDIX Taster</span><span>Mobile App Development</span></td>
                                    <td> <a className='btn btn-success' href='#'>Take</a><br/><a className='btn btn-danger' href='#'>Reject</a></td>
                                    <td>04</td>
                                    <td><span>Pathan Para</span><span>Oxizyn</span><span>4500</span><span>Bayejid</span><span>Chittagong</span><span>+880</span></td>
                                    <td >
                                        <a className='btn btn-info' href='#'>Edit</a>
                                        <a className='btn btn-danger' href='#'>Delete</a>
                                        <Link to="/staff/staffList/MailStaff" className='btn btn-primary'>Mail</Link>
                                        <Link to="/staff/warningStaff/WarningNotice" className='btn btn-warning' href='#'>Sent Warning</Link>
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

export default StaffList



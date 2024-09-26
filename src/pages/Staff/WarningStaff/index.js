import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout'

function WarningStaffList() {
    
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
                  <li className="breadcrumb-item"><a href="#">Staff</a></li>
                  <li className="breadcrumb-item active">Warning Staff</li>
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
                    <h3 class="card-title">Warning Staff List</h3>
                </div>
                <div class="card-body">
                    <div className="container mt-5">
                        <table className='table table-responsive text-nowrap text-center '>
                            <thead>
                                <tr>
                                    <th>#SL</th>
                                    <th>Name</th>
                                    <th>Employe Id</th>
                                    <th>Joining Date</th>
                                    <th>Designation</th>
                                    <th>Warning Times</th>
                                    <th>Warning Reason</th>
                                    <th>Warning Notice</th>
                                    <th>Email</th>
                                    <th>Photo</th>
                                    <th>Status</th>
                                    <th>Running Project/Type</th>
                                    <th>Project Id No</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Md Kamal</td>
                                    <td>203</td>
                                    <td>16/01/2024</td>
                                    <td>Senior Software Devoloper</td>
                                    <td className='badge bg-danger' >2</td>
                                    <td>
                                      <ol>
                                        <li>Work Delay</li>
                                        <li>Let Present</li>
                                        <li>UnOfficial</li>
                                      </ol>
                                    </td>
                                    <td>
                                      <a href="../../../assets/dist/img/user8-128x128.jpg" >Click For Notice</a><br/>
                                      <a href="../../../assets/dist/img/user8-128x128.jpg" >Click For Notice</a><br/>
                                      <a href="../../../assets/dist/img/user8-128x128.jpg" >Click For Notice</a>  
                                    </td>
                                    <td>kamal@gmail.com</td>
                                    <td><img width="200px" src="../../layouts/assets/dist/img/avatar.png"/></td>
                                    <td className='text-danger'>Warning</td>
                                    <td><span>BDIX Taster</span><span>Mobile App Development</span></td>
                                    <td>04</td>
                                    <td><span>Pathan Para</span><span>Oxizyn</span><span>4500</span><span>Bayejid</span><span>Chittagong</span><span>+880</span></td>
                                    <td >
                                        <a className='btn btn-danger' href='#'>Delete</a>
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

export default WarningStaffList
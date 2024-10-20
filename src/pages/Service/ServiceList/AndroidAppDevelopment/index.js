import React, { useState } from 'react';
import AdminLayout from '../../../../layouts/AdminLayout';

function AndroidAppDev() {
    
  return (
    <AdminLayout>
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Android App Devolopment</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Service List</a></li>
                  <li className="breadcrumb-item active">Android App Devolopment</li>
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
                    <h3 class="card-title">Service Form</h3>
                </div>
                <div class="card-body">
                    <div className="container mt-5">
                        <table className='table table-responsive'>
                            <thead>
                                <tr>
                                    <th>#SL</th>
                                    <th>Service Name</th>
                                    <th>Exparts</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Android App Devolopment</td>
                                    <td>Mukut, Ramzan, Mamun, Raja</td>
                                    <td>
                                        <a className='btn btn-danger' href='#'>Delete</a>
                                        <a className='btn btn-primary' href='#'>Edit</a>
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

export default AndroidAppDev
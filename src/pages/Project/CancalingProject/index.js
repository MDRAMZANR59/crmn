import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function CancalingProject() {
   
    return (
        <AdminLayout>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Canceling Project</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Project</a></li>
                        <li className="breadcrumb-item active">Canceling Projects</li>
                    </ol>
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>

            {/* Main content */}
            <section className="content">

                {/* Default box */}
                <div className="card">
                <div className="card-header">
                    <h3 className="card-title"> Project List</h3>

                    <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                        <i className="fas fa-times"></i>
                    </button>
                    </div>
                </div>
                <div className="card-body p-0">
                    <table className="table table-striped projects table-responsive">
                        <thead className='text-nowrap'>
                            <tr className="text-center">
                                <th>SL</th>
                                <th>Project Type</th>
                                <th>Project Name</th>
                                <th>Project Id</th>
                                <th>Customer ID</th>
                                <th>Team Leader</th>
                                <th>Team Members</th>
                                <th>Reciving Date</th>
                                <th>Estimated End Date</th>
                                <th>Project Progress</th>
                                <th>Pay</th>
                                <th>Cancaling Reason</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>001</td>
                                <td><a href="#" >Web Application Debolopment</a></td>
                                <td><a href="#" >Hospital Managment</a></td>
                                <td><a href="#" >A5X78P2</a></td>
                                <td><a href="#" >1003</a></td>
                                <td>
                                    <img src="../../../assets/dist/img/avatar.png" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                    <a href="#" className="d-block text-center" >Jons Endarson</a>
                                </td>
                                <td className='d-flex'>
                                    <span className="me-2">
                                        <img src="../../../assets/dist/img/user8-128x128.jpg" className="Thumbnail img-fluid mx-auto" width="50px" />
                                        <a href="#" className="d-block text-center" >Jons Endarson</a>
                                    </span>
                                    <span className="me-2">
                                        <img src="../../../assets/dist/img/avatar.png" className="Thumbnail img-fluid mx-auto" width="50px" />
                                        <a href="#" className="d-block text-center" >Jons Endarson</a>
                                    </span>
                                    <span className="me-2">
                                        <img src="../../../assets/dist/img/avatar.png" className="Thumbnail img-fluid mx-auto" width="50px" />
                                        <a href="#" className="d-block text-center" >Jons Endarson</a>
                                    </span>
                                    <span>
                                        <img src="../../../assets/dist/img/avatar.png" className="Thumbnail img-fluid mx-auto" width="50px" />
                                        <a href="#" className="d-block text-center" >Jons Endarson</a>
                                    </span>
                                </td>
                                <td>
                                    10/09/2024 Daynamic 
                                </td>
                                <td>
                                    10/10/2024 Daynamic 
                                </td>
                                <td className="project_progress stripped">
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: "57%"}}></div>
                                    </div>
                                    <small>57% Complete</small>
                                </td>
                                <td>57%</td>
                                <td>
                                    <textarea className='form-control' placeholder="Write Cancaling Reason" cols="25" rows="3" ></textarea>
                                </td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-danger btn-sm" href="#">
                                        <i className="fas fa-delete">
                                        </i>
                                        Cancel
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* /.card-body */}
                </div>
                {/* /.card */}

            </section>
            {/* /.content */}
            </div>
            {/* /.content-wrapper */}
        </AdminLayout>
    );
}

export default CancalingProject;

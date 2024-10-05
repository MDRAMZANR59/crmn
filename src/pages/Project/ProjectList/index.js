import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdminLayout from '../../../layouts/AdminLayout';

function ProjectList() {
   
    return (
        <AdminLayout>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Projects</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Projects List</li>
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
                    <h3 className="card-title">Project List</h3>

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
                                <th>Project Name</th>
                                <th>Project Type</th>
                                <th>Customer ID</th>
                                <th>Team Leader & Photo</th>
                                <th>Team Members & Photos</th>
                                <th>Project Progress</th>
                                <th>Start Date</th>
                                <th>Estimated End Date</th>
                                <th>Estimated budget</th>
                                <th>Advance</th>
                                <th>Due</th>
                                <th>Pay Leater</th>
                                <th>Total Pay</th>
                                <th>Status</th>
                                <th>Sort By</th>
                                <th>Review</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>001</td>
                                <td><a href="#" >Code Cruftere</a></td>
                                <td><a href="#" >Web Application Debolopment</a></td>
                                <td><a href="#" >A5X78P2</a></td>
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
                                <td className="project_progress stripped">
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: "57%"}}></div>
                                    </div>
                                    <small>57% Complete</small>
                                </td>
                                <td className="project-state">
                                    <span className="badge badge text-dark">Start Date Daynamic</span>
                                </td>
                                <td className="project-state">
                                    <span className="badge badge text-dark">Estimated End Date Daynamic</span>
                                </td>
                                <td>$5330</td>
                                <td>$3920</td>
                                <td>$410</td>
                                <td>$1000</td>
                                <td>70%</td>
                                <td className="project-state">
                                    <span className="badge badge text-dark">Success</span>
                                </td>
                                <td className="project-state">
                                    <div className="form-group">
                                        <select id="sortBy" className="form-control">
                                            <option className="bg-success">Dalivary</option>
                                            <option className="bg-secondary">Stock</option>
                                            <option className="bg-warning">Pending</option>
                                            <option className="bg-danger">Canceld</option>
                                            <option className="bg-info">Date</option>
                                        </select>
                                     </div>
                                </td>
                                <td><i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i><br/>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i><br/>
                                    <a href="#">Comment</a></td>
                                <td className="project-actions text-right">
                                    <Link className="btn btn-info btn-sm" to="/project/rushMail">
                                        <i className="fas fa-pencil-alt"></i>Send Rush
                                    </Link>
                                    <Link to="/project/invoice" className="btn btn-info btn-sm">
                                        <i className="fas fa-receipt"></i>Invoice
                                    </Link>
                                    <Link to="/project/review" className="btn btn-info btn-sm">
                                        <i className="fas fa-comment-dots"></i>Review
                                    </Link>
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

export default ProjectList;

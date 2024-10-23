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
                        <li className="breadcrumb-item"><a href="#">Project</a></li>
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
                </div>
                <div className="card-body p-0">
                    <table className="table table-striped projects table-responsive">
                        <thead className='text-nowrap'>
                            <tr className="text-center">
                                <th>SL</th>
                                <th>Project Name</th>
                                <th>Project Type</th>
                                <th>Project Id</th>
                                <th>Project Note</th>
                                <th>Team Leader</th>
                                <th>Project Progress</th>
                                <th>Recive Date</th>
                                <th>Estimated End Date</th>
                                <th>Estimated budget</th>
                                <th>Status</th>
                                <th>Review</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>001</td>
                                <td>Code Cruftere</td>
                                <td>Web Application Debolopment</td>
                                <td>A5X78P</td>
                                <td><a href="#">iushdsjikfsifs</a></td>
                                <td>
                                    <img src="../../../assets/dist/img/avatar.png" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                    <a href="#" className="d-block text-center" >Jons Endarson</a>
                                </td>
                                <td className="project_progress stripped">
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: "57%"}}></div>
                                    </div>
                                    <small>57% Complete</small>
                                </td>
                                <td>12/12/2024</td>
                                <td>12/12/2024</td>
                                <td>$500000</td>
                                <td>Running</td>
                                <td><i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i><br/>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i><br/>
                                    <a href="#">Comment</a></td>
                                <td className="project-actions text-right">
                                    <Link className="btn btn-success btn-sm" to="/project/projectTaskList">
                                        <i className="fas fa-pencil-alt"></i>Task
                                    </Link>
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

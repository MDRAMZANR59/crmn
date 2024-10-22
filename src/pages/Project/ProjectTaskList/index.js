import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdminLayout from '../../../layouts/AdminLayout';

function ProjectTaskList() {
   
    return (
        <AdminLayout>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Projects Task</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Project Task</a></li>
                        <li className="breadcrumb-item active">Projects Task List</li>
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
                    <h3 className="card-title">Project Task List</h3>

                    <div className="card-tools">
                        <Link to="/project/projectTask" className='btn btn-success'>Add Task</Link>
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
                                <th>Project Id</th>
                                <th>Employe Id</th>
                                <th>Note</th>
                                <th>Progress</th>
                                <th>Task</th>
                                <th>Assign Date</th>
                                <th>Finish Date</th>
                                <th>Actual Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>001</td>
                                <td><a href="#" >01</a></td>
                                <td><a href="#" >01 </a></td>
                                <td><a href="#" >jsdkldsjkfsd</a></td>
                                <td className="project_progress stripped">
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: "57%"}}></div>
                                    </div>
                                    <small>57% Complete</small>
                                </td>
                                <td ><a href="#" >Task</a></td>
                                <td>10/10/1010</td>
                                <td>10/10/1010</td>
                                <td>10/10/1010</td>
                                <td>
                                <Link to="" className='btn btn-info'>Edit</Link>
                                <button type='button' className='btn btn-danger' >Delete</button>
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

export default ProjectTaskList;

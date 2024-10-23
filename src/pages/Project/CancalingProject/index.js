import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function CancalingProject() {
   
    return (
        <AdminLayout>
            <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Canceled Project</h1>
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
            <section className="content">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title"> Project List</h3>
                    </div>
                    <div className="card-body p-0">
                        <table className="table table-striped projects table-responsive">
                            <thead className='text-nowrap'>
                                <tr className="text-center">
                                    <th>SL</th>
                                    <th>Project Id</th>
                                    <th>Project Name</th>
                                    <th>Project Type</th>
                                    <th>Customer Id</th>
                                    <th>Customer Name</th>
                                    <th>Project Leader</th>
                                    <th>Status</th>
                                    <th>Reciving Date</th>
                                    <th>Cancaled Date</th>
                                    <th>Canceling Reason</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>001</td>
                                    <td>005</td>
                                    <td>Suply Chain</td>
                                    <td>Web Application</td>
                                    <td>07</td>
                                    <td>Md Mukut</td>
                                    <td>
                                        <img src="../../../assets/dist/img/avatar.png" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                        <a href="#" className="d-block text-center" >Jons Endarson</a>
                                    </td>
                                    <td>10% Compleat</td>
                                    <td>10/10/2020</td>
                                    <td>10/10/2010</td>
                                    <td><a href="#">Reson In Popup</a></td>
                                    <td className="project-actions text-right">
                                        <a className="btn btn-danger btn-sm" href="#">
                                        <i class="fas fa-minus-circle"></i>Delete
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </AdminLayout>
    );
}

export default CancalingProject;

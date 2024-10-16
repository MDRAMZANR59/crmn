import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { Link } from 'react-router-dom';

function TransfaringProject() {
        const[data, setData]=useState([]);
        useEffect(() => {
            getDatas();
        }, []);
    
        function getDatas() {
            axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/index`).then(function(response) {
                setData(response.data.data);
            });
        }
        const deleteData = (id) => {
            axios.delete(`${process.env.REACT_APP_API_URL}/projectfiles/${id}`).then(function(response){
                getDatas();
            });
        }
    return (
        <AdminLayout>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Transfaring Project</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Project</a></li>
                        <li className="breadcrumb-item active">Transfaring Projects</li>
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
                    <h3 className="card-title">New Project List</h3>

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
                                <th>Select Team Leader</th>
                                <th>Select Team Members</th>
                                <th>Reciving Date</th>
                                <th>Estimated End Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                        {data && data.map((d, key) =>
                            <tr key={d.id} >
                                <td>00{d.id}</td>
                                <td>{d.projectType}</td>
                                <td>{d.projectName}</td>
                                {/* <td>{d.}</td> */}
                                <td><a href="#" >1003</a></td>
                                <td className="project-state">
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option className="bg-secondary">
                                                <img src="../../../assets/dist/img/user8-128x128.jpg" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                <a href="#" className="d-block text-center" >Jons Endarson</a>
                                            </option>
                                            <option className="bg-secondary">
                                                <img src="../../../assets/dist/img/user8-128x128.jpg" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                <a href="#" className="d-block text-center" >Wiliams Keley</a>
                                            </option>
                                            <option className="bg-secondary">
                                                <img src="../../../assets/dist/img/user8-128x128.jpg" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                <a href="#" className="d-block text-center" >Micle</a>
                                            </option>
                                            <option className="bg-secondary">
                                                <img src="../../../assets/dist/img/user8-128x128.jpg" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                <a href="#" className="d-block text-center" >Elina</a>
                                            </option>
                                            <option className="bg-secondary">
                                                <img src="../../../assets/dist/img/user8-128x128.jpg" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                <a href="#" className="d-block text-center" >Jorze</a>
                                            </option>
                                            
                                        </select>
                                     </div>
                                </td>
                                <td className="project-state">
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option className="bg-secondary">
                                                <img src="../../../assets/dist/img/user8-128x128.jpg" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                <a href="#" className="d-block text-center" >Jons Endarson</a>
                                            </option>
                                            <option className="bg-secondary">
                                                <img src="../../../assets/dist/img/user8-128x128.jpg" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                <a href="#" className="d-block text-center" >Wiliams Keley</a>
                                            </option>
                                            <option className="bg-secondary">
                                                <img src="../../../assets/dist/img/user8-128x128.jpg" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                <a href="#" className="d-block text-center" >Micle</a>
                                            </option>
                                            <option className="bg-secondary">
                                                <img src="../../../assets/dist/img/user8-128x128.jpg" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                <a href="#" className="d-block text-center" >Elina</a>
                                            </option>
                                            <option className="bg-secondary">
                                                <img src="../../../assets/dist/img/user8-128x128.jpg" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                <a href="#" className="d-block text-center" >Jorze</a>
                                            </option>
                                            
                                        </select>
                                     </div>
                                </td>
                                <td>
                                    10/09/2024 Daynamic 
                                </td>
                                <td>
                                    10/10/2024 Daynamic 
                                </td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                        <i className="fas fa-share">
                                        </i>
                                        Share
                                    </a>
                                </td>
                            </tr>
                         )}
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

export default TransfaringProject;

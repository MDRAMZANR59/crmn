import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function ProjectAdd() {
   
    return (
        <AdminLayout>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>Project Add</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Project Add</li>
                        </ol>
                    </div>
                    </div>
                </div>{/* /.container-fluid */}
                </section>

                {/* Main content */}
                <section className="content">
                <div className="row">
                    <div className="col-md-6">
                    <div className="card card-primary">
                        <div className="card-header">
                        <h3 className="card-title">General</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i className="fas fa-minus"></i>
                            </button>
                        </div>
                        </div>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="projectName">Project Name<sup className=" text-danger">*</sup></label>
                            <input required name="projectName" type="text" id="projectName" placeholder="Project Name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label required htmlFor="projectType">Project Type<sup className=" text-danger">*</sup></label>
                            <select id="projectType" name="projectType" className="form-control">
                                <option value="Select Type">Select Type</option>
                                <option value="Web Application Devolopment">Web Application Devolopment</option>
                                <option value="Pc App Devolopment">Pc App Devolopment</option>
                                <option value="Android App Devolopment">Android App Devolopment</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label required htmlFor="projectType">Domain And Hosting Provider<sup className=" text-danger">*</sup></label><br/>
                            <input id="codeCrafters" type="radio" name="doHoPr" /> <label htmlFor="codeCrafters" value="Code Crafters" className="me-2">Code Crafters</label>
                            <input id="client" type="radio" name="do&HoPr" /> <label htmlFor="client" value="Client">Client</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="expectedLanguage">Require Language/Framework</label><br/>
                            <label><strong>Front End</strong></label><br/>
                            <label htmlFor="javascript">JavaScript </label>
                            <input value="javascript" type="checkbox" id="javascript" className="me-1"/>
                            <label htmlFor="php">TypeScript</label>
                            <input value="php" type="checkbox" id="php" placeholder="Project Name" className="me-1"/>
                            <label htmlFor="vue">Vue.js</label>
                            <input type="checkbox" id="vue" placeholder="Project Name" className="me-1"/>
                            <label htmlFor="php">TypeScript</label>
                            <input type="checkbox" id="php" placeholder="Project Name" className="me-1"/>
                            <label htmlFor="angular">Angular </label>
                            <input type="checkbox" id="angular" placeholder="Project Name" className="me-1"/><br/>
                            <label htmlFor="react">React </label>
                            <input type="checkbox" id="react" placeholder="Project Name" className="me-1"/>
                            <label htmlFor="bootstrap">Bootstrap </label>
                            <input type="checkbox" id="bootstrap" placeholder="Project Name" className="me-1"/>
                            <label htmlFor="jquery">JQuery </label>
                            <input type="checkbox" id="jquery" placeholder="Project Name" className="me-1"/><hr/>

                            <label><strong>BackEnd</strong></label><br/>
                            <label htmlFor="php">PHP </label>
                            <input type="checkbox" id="javascript" placeholder="Project Name" className="me-1"/>
                            <label htmlFor="javascript">JavaScript</label>
                            <input type="checkbox" id="javascript" placeholder="Project Name" className="me-1"/>
                            <label htmlFor="c++">C++</label>
                            <input type="checkbox" id="c++" placeholder="Project Name" className="me-1"/>
                            <label htmlFor="C#">C#</label>
                            <input type="checkbox" id="php" placeholder="Project Name" className="me-1"/>
                            <label htmlFor="asp.net">ASP.NET </label>
                            <input type="checkbox" id="asp.net" placeholder="Project Name" className="me-1"/><br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">Client First Name<sup className=" text-danger">*</sup></label>
                            <input placeholder="Client Frist Name" required type="text" id="firstName" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Client Last Name<sup className=" text-danger">*</sup></label>
                            <input placeholder="Client Last Name" required type="text" id="lastName" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="customerId">Customer ID<sup className=" text-danger">*</sup></label>
                            <input placeholder="Customer ID" required type="text" id="customerId" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientCompany">Client Company Name</label>
                            <input placeholder="Client Company Name" type="text" id="clientCompany" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDescription">Project Description<sup className=" text-danger">*</sup></label>
                            <textarea placeholder='Project Description' required id="inputDescription" className="form-control" rows="4"></textarea>
                        </div>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                    </div>
                    <div className="col-md-6">
                    <div className="card card-secondary">
                        <div className="card-header">
                        <h3 className="card-title">Budget</h3>

                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i className="fas fa-minus"></i>
                            </button>
                        </div>
                        </div>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="inputEstimatedBudget">Estimated budget<sup className=" text-danger">*</sup></label>
                            <input required placeholder="Estimated budget" type="number" id="inputEstimatedBudget" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="advance">Total Advance <sup className=" text-danger">*</sup></label>
                            <input required placeholder="Advance" type="number" id="advance" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEstimatedDuration">Estimated project duration</label>
                            <input placeholder="Estimated duration" type="number" id="inputEstimatedDuration" className="form-control"/>
                        </div>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <a href="#" className="btn btn-secondary">Cancel</a>
                    <input type="submit" value="Create new Porject" className="btn btn-success float-right"/>
                    </div>
                </div>
                </section>
                {/* /.content */}
            </div>
        </AdminLayout>
    );
}

export default ProjectAdd;

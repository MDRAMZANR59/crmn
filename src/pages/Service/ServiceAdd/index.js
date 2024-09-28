import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function ServiceAdd() {
    const [formData, setFormData] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        return true;
    };

    const handleSubmit = (e) => {
        return true;
    };

    return (
        <AdminLayout>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Add New Service</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Service</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="container mt-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row md-12">
                                            <div className="col-md-6">
                                                <label htmlFor="serviceName" className="form-label">Service Name<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="serviceName"
                                                    type="text"
                                                    className={`form-control ${errors.serviceName ? 'is-invalid' : ''}`}
                                                    id="serviceName"
                                                    name="serviceName"
                                                    value={formData.serviceName}
                                                    onChange={handleChange}
                                                />
                                                {errors.serviceName && <div className="invalid-feedback">{errors.serviceName}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="exparts" className="form-label text-black">Exparts <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="exparts"
                                                    name="exparts"
                                                    value={formData.exparts}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.exparts ? 'is-invalid' : ''}`}>
                                                    <option value="0">Select expart</option>
                                                    <option value="2">Mukut</option>
                                                    <option value="3">Mamun</option>
                                                    <option value="4">Raja</option>
                                                    <option value="5">Buppy</option>
                                                </select>
                                                {errors.exparts && <div className="invalid-feedback">{errors.exparts}</div>}
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label><strong>Languages<sup className=" text-danger">*</sup></strong></label><br/>
                                                    <label htmlFor="javascript">JavaScript </label>
                                                    <input type="checkbox" id="javascript" placeholder="Project Name" className="me-1"/>
                                                    <label htmlFor="php">TypeScript</label>
                                                    <input type="checkbox" id="php" placeholder="Project Name" className="me-1"/>
                                                    <label htmlFor="vue">Vue.js</label>
                                                    <input type="checkbox" id="vue" placeholder="Project Name" className="me-1"/>
                                                    <label htmlFor="php">TypeScript</label>
                                                    <input type="checkbox" id="php" placeholder="Project Name" className="me-1"/>
                                                    <label htmlFor="angular">Angular </label>
                                                    <input type="checkbox" id="angular" placeholder="Project Name" className="me-1"/>
                                                    <label htmlFor="react">React </label>
                                                    <input type="checkbox" id="react" placeholder="Project Name" className="me-1"/>
                                                    <label htmlFor="bootstrap">Bootstrap </label>
                                                    <input type="checkbox" id="bootstrap" placeholder="Project Name" className="me-1"/>
                                                    <label htmlFor="jquery">JQuery </label>
                                                    <input type="checkbox" id="jquery" placeholder="Project Name" className="me-1"/>
                                                    <label htmlFor="php">PHP </label>
                                                    <input type="checkbox" id="javascript" placeholder="Project Name" className="me-1"/>
                                                    <label htmlFor="javascript">JavaScript</label>
                                                    <input type="checkbox" id="javascript" placeholder="Project Name" className="me-1"/>
                                                    <label htmlFor="c++">C++</label>
                                                    <input type="checkbox" id="c++" placeholder="Project Name" className="me-1"/>
                                                    <label htmlFor="C#">C#</label>
                                                    <input type="checkbox" id="php" placeholder="Project Name" className="me-1"/>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-3">Add Service</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
}

export default ServiceAdd;

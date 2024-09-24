import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function CustomerAdd() {
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
                                <h1 className="m-0">Add New Customer</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Customer form</h3>
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
                                <div className="container mt-1">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row md-6">
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="fristName" className="form-label">First Name<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="First Name"
                                                    type="text"
                                                    className={`form-control ${errors.fristName ? 'is-invalid' : ''}`}
                                                    id="fristName"
                                                    name="fristName"
                                                    value={formData.fristName}
                                                    onChange={handleChange}
                                                />
                                                {errors.fristName && <div className="invalid-feedback">{errors.fristName}</div>}
                                            </div>

                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="lastName" className="form-label">Last Name<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Last Name"
                                                    type="text"
                                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                />
                                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                            </div>
                                           
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="email" className="form-label">Email<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Email"
                                                    type="email"
                                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                            </div>

                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="phone" className="form-label">Phone<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Contact"
                                                    type="number"
                                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="projectName" className="form-label">Project Name<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Project Name"
                                                    type="text"
                                                    className={`form-control ${errors.projectName ? 'is-invalid' : ''}`}
                                                    id="projectName"
                                                    name="projectName"
                                                    value={formData.projectName}
                                                    onChange={handleChange}
                                                />
                                                {errors.projectName && <div className="invalid-feedback">{errors.projectName}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="projectType" className="form-label text-black">Project Type <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="projectType"
                                                    name="projectType"
                                                    value={formData.projectType}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.projectType ? 'is-invalid' : ''}`}>
                                                    <option value="0">Select projectType</option>
                                                    <option value="2">Web Application Devolopment</option>
                                                    <option value="3">Android App Devolopment</option>
                                                    <option value="4">PC App Devolopment</option>
                                                </select>
                                                {errors.projectType && <div className="invalid-feedback">{errors.projectType}</div>}
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="companyName" className="form-label">Company Name</label>
                                                <input
                                                    placeholder="Project Name"
                                                    type="text"
                                                    className={`form-control ${errors.projectSL ? 'is-invalid' : ''}`}
                                                    id="companyName"
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                />
                                                {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="employeId" className="form-label">Employe ID</label>
                                                <input
                                                    placeholder="Employe Id"
                                                    type="number"
                                                    className={`form-control ${errors.employeId ? 'is-invalid' : ''}`}
                                                    id="employeId"
                                                    name="employeId"
                                                    value={formData.employeId}
                                                    onChange={handleChange}
                                                />
                                                {errors.employeId && <div className="invalid-feedback">{errors.employeId}</div>}
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="photo" className="form-label">Photo</label>
                                                <input
                                                    placeholder="Photo"
                                                    type="file"
                                                    className={`form-control ${errors.photo ? 'is-invalid' : ''}`}
                                                    id="photo"
                                                    name="photo"
                                                    value={formData.photo}
                                                    onChange={handleChange}
                                                />
                                                {errors.photo && <div className="invalid-feedback">{errors.photo}</div>}
                                            </div>

                                            <div className="mb-3 col-12">
                                            <label htmlFor="name" className="form-label display-6">Leving Address</label>
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="country" className="form-label text-black">Country <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="country"
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.country ? 'is-invalid' : ''}`}>
                                                    <option value="0">Select a country</option>
                                                    <option value="2">Bangladesh</option>
                                                    <option value="3">Algeria</option>
                                                    <option value="4">Afghanistan</option>
                                                    <option value="5">Ghana</option>
                                                    <option value="6">Albania</option>
                                                    <option value="7">Bahrain</option>
                                                    <option value="8">Colombia</option>
                                                    <option value="9">Dominican Republic</option>
                                                </select>
                                                {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="districts" className="form-label">Districts<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Districts"
                                                    type="text"
                                                    className={`form-control ${errors.districts ? 'is-invalid' : ''}`}
                                                    id="districts"
                                                    name="districts"
                                                    value={formData.districts}
                                                    onChange={handleChange}
                                                />
                                                {errors.districts && <div className="invalid-feedback">{errors.districts}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="upozila" className="form-label">Upozila<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Upozila"
                                                    type="text"
                                                    className={`form-control ${errors.upozila ? 'is-invalid' : ''}`}
                                                    id="upozila"
                                                    name="upozila"
                                                    value={formData.upozila}
                                                    onChange={handleChange}
                                                />
                                                {errors.upozila && <div className="invalid-feedback">{errors.upozila}</div>}
                                            </div>

                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="post" className="form-label">Post<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Post"
                                                    type="text"
                                                    className={`form-control ${errors.post ? 'is-invalid' : ''}`}
                                                    id="post"
                                                    name="post"
                                                    value={formData.post}
                                                    onChange={handleChange}
                                                />
                                                {errors.post && <div className="invalid-feedback">{errors.post}</div>}
                                            </div>

                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="zipCode" className="form-label">Zip Code<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Zip Code"
                                                    type="number"
                                                    className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                                                    id="zipCode"
                                                    name="zipCode"
                                                    value={formData.zipCode}
                                                    onChange={handleChange}
                                                />
                                                {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="state" className="form-label">State<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="State"
                                                    type="text"
                                                    className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                                                    id="state"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                />
                                                {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="houseNumber" className="form-label">House Number<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="House Number"
                                                    type="number"
                                                    className={`form-control ${errors.houseNumber ? 'is-invalid' : ''}`}
                                                    id="houseNumber"
                                                    name="houseNumber"
                                                    value={formData.houseNumber}
                                                    onChange={handleChange}
                                                />
                                                {errors.houseNumber && <div className="invalid-feedback">{errors.houseNumber}</div>}
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-3">Add Customer</button>
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

export default CustomerAdd;
